import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0.0')
  .addTag('cats')
  .build();
const document:OpenAPIObject = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document); // END포인트 정의
  app.useGlobalPipes(new ValidationPipe()); // 클래스 Validation을 위한 모듈 등록
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = process.env.PORT
  app.enableCors({
    origin: true, //특정 URL
    credentials: true
  })
  await app.listen(PORT);
}
bootstrap();
