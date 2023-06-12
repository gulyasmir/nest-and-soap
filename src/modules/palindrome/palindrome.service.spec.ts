import { Test, TestingModule } from '@nestjs/testing';
import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let service: PalindromeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalindromeService],
    }).compile();

    service = module.get<PalindromeService>(PalindromeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
