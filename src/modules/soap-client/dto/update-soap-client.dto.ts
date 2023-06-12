import { PartialType } from '@nestjs/swagger';
import { CreateSoapClientDto } from './create-soap-client.dto';

export class UpdateSoapClientDto extends PartialType(CreateSoapClientDto) {}
