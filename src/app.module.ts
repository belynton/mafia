import { Module } from '@nestjs/common';
import { StorageModule } from './db/database.providers';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    StorageModule,
    UsersModule,
  ]
})
export class AppModule {
}
