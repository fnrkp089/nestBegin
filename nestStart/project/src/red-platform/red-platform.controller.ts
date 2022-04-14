import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RedPlatformService } from './red-platform.service';
import { CreateRedPlatformDto } from './dto/create-red-platform.dto';
import { UpdateRedPlatformDto } from './dto/update-red-platform.dto';

@Controller('red-platform')
export class RedPlatformController {
  constructor(private readonly redPlatformService: RedPlatformService) {}

  @Post()
  create(@Body() createRedPlatformDto: CreateRedPlatformDto) {
    return this.redPlatformService.create(createRedPlatformDto);
  }

  @Get()
  findAll() {
    return this.redPlatformService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redPlatformService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRedPlatformDto: UpdateRedPlatformDto) {
    return this.redPlatformService.update(+id, updateRedPlatformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redPlatformService.remove(+id);
  }
}
