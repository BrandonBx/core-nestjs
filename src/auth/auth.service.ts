import {Injectable} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {JwtPayload} from '../interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) {
    }

    // async validateUser(token: string): Promise<any> {
    //     // Validate if token passed along with HTTP request
    //     // is associated with any registered account in the database
    //     return await this.userService.findOneByToken(token);
    // }

    async createToken() {
        const user: JwtPayload = { email: 'test@email.com' };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: 3600,
            accessToken,
        };
    }

    async signIn(): Promise<string> {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        const user: JwtPayload = {email: 'user@email.com'};
        return this.jwtService.sign(user.email);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.findOneByEmail(payload.email);
    }
}
