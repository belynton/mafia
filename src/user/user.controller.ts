import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }
}