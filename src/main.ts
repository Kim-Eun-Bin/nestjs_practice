import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { AuthGuard } from './auth/auth.guard';

// dotenv.config({
//   path: path.resolve(process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env'),
// });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard()); // global guard
  await app.listen(3000);
}

bootstrap();
