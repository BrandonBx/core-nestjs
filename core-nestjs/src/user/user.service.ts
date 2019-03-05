import {HttpService, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from '../entity/user';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        private http: HttpService,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}

    async findOneByToken(token: string) {
        this.userRepository.findOne(token);
    }
}
