import { Test, TestingModule } from '@nestjs/testing';
import { NestjsSharedService } from './nestjs-shared.service';

describe('NestjsSharedService', () => {
  let service: NestjsSharedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsSharedService],
    }).compile();

    service = module.get<NestjsSharedService>(NestjsSharedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
