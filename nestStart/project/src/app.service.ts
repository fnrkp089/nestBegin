import { Injectable } from '@nestjs/common';

@Injectable() // 공급자는 Injectable가능 의존성 주입
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
