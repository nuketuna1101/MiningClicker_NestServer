// =================================================
// main.ts :: app의 진입점
//=================================================
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';                   // cors 보안규칙

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
