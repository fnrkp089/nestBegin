import { Test, TestingModule } from '@nestjs/testing';
import { RedPlatformController } from './red-platform.controller';
import { RedPlatformService } from './red-platform.service';

describe('RedPlatformController', () => {
  let controller: RedPlatformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedPlatformController],
      providers: [RedPlatformService],
    }).compile();

    controller = module.get<RedPlatformController>(RedPlatformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
