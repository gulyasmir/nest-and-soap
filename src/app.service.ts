import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Swagger <a href="/api">localhost:3000/api</a></h1>';
  }
}
