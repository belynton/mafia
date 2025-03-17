import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateRoomDto } from "src/dto/create.room.dto";
import { UserService } from "src/user/user.service";
import { UserRoom } from "src/user-room/user-room.entity";
import { User } from "src/user/users.entity";

@Injectable()
export class RoomService {
    
    constructor(
        @InjectRepository(Room)
        private repository: Repository<Room>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(UserRoom)
        private userRoomRepository: Repository<UserRoom>,
        private dataSource: DataSource,
      ) {}

      async create(createRoomDto: CreateRoomDto): Promise<Room> {
        const newRoom = this.repository.create(createRoomDto); 
        return await this.repository.save(newRoom); 
      }

      
      async join(roomId, userId: number): Promise<void> {
        await this.dataSource.transaction(async (manager) => {
            const roomRepository = manager.getRepository(Room);
            const userRepository = manager.getRepository(User);
            const userRoomRepository = manager.getRepository(UserRoom);

            const room = await roomRepository.findOne({
                where: { id: roomId, },
                relations: ['userRooms'],
            });
            if (!room) {
                throw new Error('Room not found');
            }
    
            const existingUserRoom = await userRoomRepository.findOne({
                where: { roomId, userId },
            });

            if (existingUserRoom) {
                throw new Error('User is already in the room');
            }

            const user = await userRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new Error('User not found');
            }
            const newUserRoom = userRoomRepository.create({
                roomId: room.id,
                userId: user.id,
            });
            await userRoomRepository.save(newUserRoom);
        
            room.userRooms.push(newUserRoom)
            room.playerCount = (room.playerCount || 0) + 1;
            await roomRepository.save(room);
        });

    }

}