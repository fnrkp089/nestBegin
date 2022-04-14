import { Module } from '@nestjs/common';
import { RedPlatformService } from './red-platform.service';
import { RedPlatformController } from './red-platform.controller';

@Module({
  controllers: [RedPlatformController],
  providers: [RedPlatformService]
})
export class RedPlatformModule {}
