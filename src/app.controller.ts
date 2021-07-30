import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard'; 
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  // when local, empty
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    // return req.user  -----   
    return this.authService.login(req.user);
  }
}
