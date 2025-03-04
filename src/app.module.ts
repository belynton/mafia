import { Module } from '@nestjs/common';
import { StorageModule } from './db/database.providers';
import { UsersModule } from './user/user.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    StorageModule,
    UsersModule,
    RoomModule,
  ]
})
export class AppModule {
}
