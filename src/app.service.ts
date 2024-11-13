// =================================================
// app.service.ts :: service logic의 작성
//=================================================
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
