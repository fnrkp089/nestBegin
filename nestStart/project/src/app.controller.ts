import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller() // END포인트 작성가능
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService: CatsService) {}

  // localhost:8000/cats/hello
  @Get() //데코레이터는 기능을 첨가하는 느낌. 재사용성 극대화
  getHello() {
    return 'Hello World';
  }
}
