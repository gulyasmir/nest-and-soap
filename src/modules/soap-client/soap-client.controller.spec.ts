import { Test, TestingModule } from '@nestjs/testing';
import { SoapClientController } from './soap-client.controller';
import { SoapClientService } from './soap-client.service';

describe('SoapClientController', () => {
  let controller: SoapClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoapClientController],
      providers: [SoapClientService],
    }).compile();

    controller = module.get<SoapClientController>(SoapClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
