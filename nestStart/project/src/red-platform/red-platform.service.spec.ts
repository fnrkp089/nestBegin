import { Test, TestingModule } from '@nestjs/testing';
import { RedPlatformService } from './red-platform.service';

describe('RedPlatformService', () => {
  let service: RedPlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedPlatformService],
    }).compile();

    service = module.get<RedPlatformService>(RedPlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
