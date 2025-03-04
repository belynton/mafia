import { StatusType } from "src/room/room.entity";

export class CreateRoomDto {
    status: StatusType;
    playerCount?: number;
    avatarUrl: string;
}