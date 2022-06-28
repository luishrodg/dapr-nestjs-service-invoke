import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello my order';
  }

  async getProductHello() {
    const { data } = await lastValueFrom(
      this.httpService.get(
        'http://localhost:3500/v1.0/invoke/product-api/method/',
      ),
    );
    return data;
  }

  async postProductHello() {
    const { data } = await lastValueFrom(
      this.httpService.post(
        'http://localhost:3500/v1.0/invoke/product-api/method/product',
        {
          name: 'test',
          price: 10,
        },
      ),
    );
    return data;
  }
}
