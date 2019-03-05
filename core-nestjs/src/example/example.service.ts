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

    async find(id: number): Promise<Example> {
        return await this.exampleRepository.findOne(id);
    }

    async update(id: number, currExample: Example): Promise<Example> {
        let exampleUpdate = await this.exampleRepository.findOne(id);
        exampleUpdate = currExample;
        return await this.exampleRepository.save(exampleUpdate);
    }

    async delete(id: number) {
        const exampleToDelete = await this.exampleRepository.findOne(id);
        return await this.exampleRepository.delete(exampleToDelete);
    }
}
