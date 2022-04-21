import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { PositiveIntPipe } from 'src/pipes/positiveint.pipe';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto'
import { ReadOnlyCatDto } from './dto/cat.response.dto'
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService,
              private readonly authservice: AuthService) { }

  // cats/
  @ApiOperation({summary: '고양이 아이디로 가져오기'})
  @Get(':id')
  getCurrentCat() {
    return 'current Cat'
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 500,
    description: '서버 에러입니다'
  })
  @ApiResponse({
    status: 200,
    description: '성공이다냥',
    type: ReadOnlyCatDto
  })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body)
  }

  @Post('login')
  login(@Body() data: LoginRequestDto) {
    return this.authservice.jwtLogin(data);
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
