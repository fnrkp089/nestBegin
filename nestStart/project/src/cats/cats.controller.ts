import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { PositiveIntPipe } from 'src/pipes/positiveint.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get(':id')
  getCurrentCat() {
    return 'current Cat'
  }
  
  @Post()
  async signUp(@Body() body) {
    console.log(body)
    return 'sign up'
  }

  @Post('login')
  login() {
    return 'login'
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg'
  }
}
