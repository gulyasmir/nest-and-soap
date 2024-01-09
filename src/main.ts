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
    response.end(`<div style="padding:10%; text-align:center;"><h1>SOAP SERVER</h1> <a href= "http://localhost:8000/wsdl?wsdl">go to SOAP</a></div>`);
  });

  server.listen(8000);
  soap.listen(server, '/wsdl', wsdlService, xml, function () {
    console.log('soap server initialized');
  });
}
bootstrap();
