import { TypeOrmModule } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { RoomService } from "./room.service";
import { Module } from '@nestjs/common';
import { RoomController } from "./room.controller";
import { UserService } from "src/user/user.service";
import { User } from "src/user/users.entity";
import { UserRoom } from "src/user-room/user-room.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Room, User, UserRoom])],
  providers: [RoomService, UserService],
  controllers: [RoomController],
})
export class RoomModule {}