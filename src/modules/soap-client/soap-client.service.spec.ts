import { Test, TestingModule } from '@nestjs/testing';
import { SoapClientService } from './soap-client.service';

describe('SoapClientService', () => {
  let service: SoapClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoapClientService],
    }).compile();

    service = module.get<SoapClientService>(SoapClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
