import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {ExampleDto} from "./dto/example-dto";

@Controller('example')
export class ExampleController {
    @Get()
    findAll() {
        return of([]);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return null;
    }

    @Put(':id')
    update(@Param('id') id, @Body() exampleDto: ExampleDto) {
        return null;
    }

    @Post()
    create(@Body() exampleDto: ExampleDto) {
        return null;
    }
}
