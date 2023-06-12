import { Test, TestingModule } from '@nestjs/testing';
import { PalindromeController } from './palindrome.controller';
import { PalindromeService } from './palindrome.service';

describe('PalindromeController', () => {
  let controller: PalindromeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalindromeController],
      providers: [PalindromeService],
    }).compile();

    controller = module.get<PalindromeController>(PalindromeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
