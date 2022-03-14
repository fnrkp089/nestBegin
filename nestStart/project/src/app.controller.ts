import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//데코레이터는 기능을 첨가하는 느낌. 재사용성 극대화
  getHello(): string {
    return this.appService.getHello();
  }
}
