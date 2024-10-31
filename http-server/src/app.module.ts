import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './microservices/math.service';
import { StringService } from './microservices/string.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,MathService, StringService],
})
export class AppModule {}
