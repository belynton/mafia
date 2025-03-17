import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { RoomService } from "./room.service";
import { CreateRoomDto } from "src/dto/create.room.dto";

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Post()
    async create(@Body() createRoomDto: CreateRoomDto) {
        return await this.roomService.create(createRoomDto);
    }

    @Get()
    async join(@Param('roomId') roomId: number, @Param('userId') userId: number) {
        return await this.roomService.join(roomId, userId);
    }
}