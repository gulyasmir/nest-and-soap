import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalindromeModule } from './modules/palindrome/palindrome.module';
import { Palindrome } from './modules/palindrome/entities/palindrome.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoapClientModule } from './modules/soap-client/soap-client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      entities: [Palindrome],
    //  synchronize: true,
    }),
    PalindromeModule,
    SoapClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
