import { Module } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { PalindromeController } from './palindrome.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palindrome } from './entities/palindrome.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Palindrome])],
  controllers: [PalindromeController],
  providers: [PalindromeService],
})
export class PalindromeModule {}
