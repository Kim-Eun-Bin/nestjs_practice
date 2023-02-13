import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get('DATABASE_HOST'));
    return this.appService.getHello();
  }

  @Get('redirect/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
