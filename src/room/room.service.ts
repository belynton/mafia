import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateRoomDto } from "src/dto/create.room.dto";

@Injectable()
export class RoomService {
    
    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
      ) {}

      async create(createRoomDto: CreateRoomDto): Promise<Room> {
        const newRoom = this.roomRepository.create(createRoomDto); 
        return await this.roomRepository.save(newRoom); 
      }

}