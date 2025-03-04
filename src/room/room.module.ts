import { TypeOrmModule } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { RoomService } from "./room.service";
import { Module } from '@nestjs/common';
import { RoomController } from "./room.controller";
import { UserService } from "src/user/user.service";


@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService, UserService],
  controllers: [RoomController],
})
export class RoomModule {}