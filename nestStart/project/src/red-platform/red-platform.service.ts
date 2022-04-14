import { Injectable } from '@nestjs/common';
import { CreateRedPlatformDto } from './dto/create-red-platform.dto';
import { UpdateRedPlatformDto } from './dto/update-red-platform.dto';

@Injectable()
export class RedPlatformService {
  create(createRedPlatformDto: CreateRedPlatformDto) {
    return 'This action adds a new redPlatform';
  }

  findAll() {
    return `This action returns all redPlatform`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redPlatform`;
  }

  update(id: number, updateRedPlatformDto: UpdateRedPlatformDto) {
    return `This action updates a #${id} redPlatform`;
  }

  remove(id: number) {
    return `This action removes a #${id} redPlatform`;
  }
}
