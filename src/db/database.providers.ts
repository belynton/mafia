
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: 54321,
      username: "mafia",
      password: "mafia",
      database: "mafia",
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,   
    })
  ]
})
export class StorageModule {}