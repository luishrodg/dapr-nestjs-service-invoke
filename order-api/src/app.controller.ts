import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('product')
  getProductHello() {
    return this.appService.getProductHello();
  }

  @Post('product')
  postProductHello() {
    return this.appService.postProductHello();
  }
}
