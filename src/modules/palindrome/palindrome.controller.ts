import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { CreatePalindromeDto } from './dto/create-palindrome.dto';

@Controller('palindrome')
export class PalindromeController {
  constructor(private readonly palindromeService: PalindromeService) {}

  @Post()
  create(@Body() createPalindromeDto: CreatePalindromeDto) {
    return this.palindromeService.create(createPalindromeDto);
  }

  @Get()
  findAll() {
    return this.palindromeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palindromeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palindromeService.remove(+id);
  }
}
