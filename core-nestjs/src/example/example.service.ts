import {HttpService, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Example} from '../entity/example';
import {Repository} from 'typeorm';

@Injectable()
export class ExampleService {
    constructor(
        private http: HttpService,
        @InjectRepository(Example) private readonly exampleRepository: Repository<Example>,
    ) {
    }

    async findAll(): Promise<Example[]> {
        return await this.exampleRepository.find();
    }
}
