import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService : UsersService,
        private jwtService: JwtService) {} // instance and inject

    async validateUser(username: string, pwd: string ): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password == pwd ) {
            const { password, ...result } = user;
            return result    // return user without password, in other word, username and userId
        }
        return null;
    }

    async login(user:any) {
        const payload = { username: user.username, sub: user.userId};
        return {
            access_token : this.jwtService.sign(payload) // create jwt with JwtModule.register(secretkey and expiraIn)
        }
    }
    
}
