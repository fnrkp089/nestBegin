import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { Cat } from './cats.schema'
import { CatRequestDto } from './dto/cats.request.dto';
import { CatsRepository } from './cats.repository';

//스키마를 사용하기위해선 의존성 주입을 해줘야한다.
@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) { }
  async signUp(body: CatRequestDto) { 
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    if (isCatExist) {//유효성 검사
      throw new UnauthorizedException('해당 고양이는 이미 있어요 야옹');//->httpExceptionFilter로 넘어감
      //throw new HttpException('고양이가 있어요 야옹', 403);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword
    });

    return cat.readOnlyData;
  }

  
}
