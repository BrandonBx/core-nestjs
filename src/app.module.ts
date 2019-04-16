import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ExampleController} from './example/example.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {Example} from './entity/example.entity';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';
import {UserController} from './user/user.controller';
import {HttpStrategy} from './strategies/http-strategy';
import {User} from './entity/user.entity';
import {PassportModule} from '@nestjs/passport';
import {JwtService} from './jwt/jwt.service';
import {JwtModule} from '@nestjs/jwt';

const entities = [
    Example,
    User,
];

@Module({
    imports: [
        // Orm
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([...entities]),

        // Authentication
        PassportModule.register({defaultStrategy: 'bearer'}),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            }
        })
    ],
    controllers: [AppController, ExampleController, UserController],
    providers: [AppService, AuthService, UserService, HttpStrategy, JwtService],
    exports: []
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }

}
