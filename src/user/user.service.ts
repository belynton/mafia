import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from 'src/dto/create.user.dto';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

      async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(createUserDto); 
        return await this.usersRepository.save(newUser); 
      }

}