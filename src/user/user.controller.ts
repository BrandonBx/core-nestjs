import {Controller, Get, Post, Put, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('user.entity.ts.entity.ts')
export class UserController {

    @Get()
    @UseGuards(AuthGuard('bearer'))
    findAll(): string {
        return 'this act'
    }

    @Get()
    find(id: number){
        return 0;
    }

    @Post()
    create(){
        return null;
    }

    @Put()
    update(){
        return null;
    }
}
