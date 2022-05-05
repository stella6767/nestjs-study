import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';

/**
 * 데코레이터? 어노테이션이랑 비슷한 건가.. 리플렉션으로 타겟이 되나?
 */

@Module({
  imports: [BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
