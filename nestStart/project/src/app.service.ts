import { Injectable } from '@nestjs/common';

@Injectable() // 공급자는 Injectable가능
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
