import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoapClientService } from './soap-client.service';
import { CreateSoapClientDto } from './dto/create-soap-client.dto';


@Controller('soap-client')
export class SoapClientController {
  constructor(private readonly soapClientService: SoapClientService) {}

  @Post()
  async create(@Body() createSoapClientDto: CreateSoapClientDto) {
    const res = await this.soapClientService.sendMessageToSoapServer(createSoapClientDto);
    console.log('SoapClientController res', res)
    return res
  }
}
