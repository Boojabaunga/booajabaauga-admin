import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule],    // import UsersModule in order to use user.service in auth module
  providers: [AuthService]
})
export class AuthModule {}
