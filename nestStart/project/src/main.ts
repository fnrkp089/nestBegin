import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // 클래스 Validation을 위한 모듈 등록
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = process.env.PORT
  await app.listen(PORT);
}
bootstrap();
