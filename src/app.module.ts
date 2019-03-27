import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ExampleController} from './example/example.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Connection} from 'typeorm';
import {Example} from './entity/example';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';
import {UserController} from './user/user.controller';
import {HttpStrategy} from './strategies/http-strategy';
import {User} from './entity/user';

const entities = [
    Example,
    User,
];

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([...entities]),
    ],
    controllers: [AppController, ExampleController, UserController],
    providers: [AppService, AuthService, UserService, HttpStrategy],
    exports: []
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }

}