import { Controller, Post, Body } from "@nestjs/common";
import { RoomService } from "./room.service";
import { CreateRoomDto } from "src/dto/create.room.dto";

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Post()
    async create(@Body() createRoomDto: CreateRoomDto) {
        return await this.roomService.create(createRoomDto);
    }
}