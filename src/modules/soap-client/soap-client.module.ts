import { Module } from '@nestjs/common';
import { SoapClientService } from './soap-client.service';
import { SoapClientController } from './soap-client.controller';

@Module({
  controllers: [SoapClientController],
  providers: [SoapClientService]
})
export class SoapClientModule {}
