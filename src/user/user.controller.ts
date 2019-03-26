import {Controller, Get, Post, Put} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
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
