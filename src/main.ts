import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import soap = require('soap');
import http = require('http');
import fs = require('fs');
import { wsdlService } from './soap/wsdl-service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('REST example')
    .setDescription('The REST API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  const xml = fs.readFileSync('wdsl-service.wsdl', 'utf8');

  //http server example
  const server = http.createServer(function (request, response) {
    response.end('404: Not Found: ' + request.url);
  });

  server.listen(8000);
  soap.listen(server, '/wsdl', wsdlService, xml, function () {
    console.log('soap server initialized');
  });
}
bootstrap();
