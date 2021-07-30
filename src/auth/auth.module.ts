import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport' 
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule],    // in order to use the passport we defined
  providers: [AuthService]
})
export class AuthModule {}
