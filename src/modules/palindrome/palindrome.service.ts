import { Injectable } from '@nestjs/common';
import { CreatePalindromeDto } from './dto/create-palindrome.dto';
import { Palindrome } from './entities/palindrome.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PalindromeService {
  constructor(
    @InjectRepository(Palindrome)
    private palindromeRepository: Repository<Palindrome>,
  ) {}

  async create(createPalindromeDto: CreatePalindromeDto) {
    const checkResult = this.checkPalindrome(createPalindromeDto.text);
    const res = checkResult ?  'Это  паллиндром' : 'Это не паллиндром';
    /* ? (await this.palindromeRepository.save(createPalindromeDto))
        ? 'Паллиндром успешно добавлен'
        : 'Паллиндром не удалось добавить'
      : 'Это не паллиндром';
    */
      return res
  }
  private checkPalindrome(text: string) {
    const str: string = this.normalizeString(text);
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return len > 0 ? true : false;
  }

  private normalizeString(str: string) {
    const res = str.replaceAll(' ', '').toLocaleLowerCase();
    return res;
  }

  findAll() {
    return this.palindromeRepository.find();
  }

  findOne(id: number) {
    return this.palindromeRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.palindromeRepository.delete(id);
  }
}
