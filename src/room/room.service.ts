import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
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
      ) {}

      async create(createRoomDto: CreateRoomDto): Promise<Room> {
        const newRoom = this.repository.create(createRoomDto); 
        return await this.repository.save(newRoom); 
      }

      
      async join(roomId, userId: number): Promise<void> {
        const room = await this.repository.findOne({
            where: { id: roomId, },
            relations: ['userRooms'],
        });
        if (!room) {
            throw new Error('Room not found');
        }
    
        // Проверяем, есть ли уже запись в UserRoom для данного пользователя и комнаты
            const existingUserRoom = await this.userRoomRepository.findOne({
                where: { roomId, userId },
            });

            if (existingUserRoom) {
                throw new Error('User is already in the room');
            }

            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new Error('User not found');
            }

            const newUserRoom = this.userRoomRepository.create({ roomId, userId });
            await this.userRoomRepository.save(newUserRoom);

            // Обновляем количество игроков в комнате
            room.playerCount = (room.playerCount || 0) + 1;
            await this.repository.save(room);
    }

}