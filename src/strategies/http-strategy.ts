import {Injectable, UnauthorizedException} from '@nestjs/common';
import {Strategy} from 'passport-http-bearer';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(token: string){
        const user = await this.authService.validateUser(token);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user
    }
}
