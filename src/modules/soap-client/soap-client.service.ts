import { Injectable } from '@nestjs/common';
import * as soap from 'soap';
import { Client, createClientAsync } from 'soap';

@Injectable()
export class SoapClientService {
  async sendMessageToSoapServer(data: any): Promise<any> {
    console.log('data', data);
    const url = 'http://localhost:8000/wsdl?wsdl'; // URL SOAP-сервера
    const args = {
      descriptions: data,
    };

    return soap.createClient(url, {},  (err, client) => {
          return  client.PallindromSend(args, async function (err, result) {
            console.log('createClient', result.data);
            return result.data;
          });
        });
    
  }
}
