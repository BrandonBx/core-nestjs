import {Controller, Get, Post, Put, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('user.entity.ts.entity.ts')
export class UserController {

    @Get()
    @UseGuards(AuthGuard())
    findAll(): string {
        return 'this act'
    }

    @Get()
    @UseGuards(AuthGuard())
    find(id: number){
        return 0;
    }

    @Post()
    @UseGuards(AuthGuard())
    create(){
        return null;
    }

    @Put()
    @UseGuards(AuthGuard())
    update(){
        return null;
    }
}
