import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService : UsersService) {} // instance and inject

    async vaildatorUser(username: string, pwd: string ): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password == pwd ) {
            const { password, ...result } = user;
            return result    // return user without password, in other word, username and userId
        }
        return null;
    }
    
}
