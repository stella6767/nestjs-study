import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipe/validation-pipe.service';
import * as config from 'config';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger(bootstrap.name);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const serverConfig = config.get('server');
  const port = serverConfig.port;

  await app.listen(port);
  logger.log(`Application running on port ${port}`)
}
bootstrap();
