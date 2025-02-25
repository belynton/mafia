import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageModule } from './db/database.providers';

@Module({
  imports: [StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
