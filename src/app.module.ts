import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './controller/boards/boards.module';
import { LoggerMiddleware } from './middlware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

/**
 * 데코레이터? 어노테이션이랑 비슷한 건가.. 리플렉션으로 타겟이 되나?
 */

@Module({
  imports: [BoardsModule,
    TypeOrmModule.forRoot(typeORMConfig),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer): any {

    consumer
      .apply(LoggerMiddleware)
      //.exclude()

      .forRoutes({path:"*", method:RequestMethod.ALL});
  }


}
