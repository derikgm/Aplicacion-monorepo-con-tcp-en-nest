import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
  const logger = new Logger('AppController')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('sum')
  async sumNumbers(data: Array<number>) {
    return { result: data.reduce((a, b) => a + b) }
  }
  
}
