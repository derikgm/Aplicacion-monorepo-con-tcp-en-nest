import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('string')
  async sumNumbers(data: Array<string>) {
    return this.appService.revisarString(data);
  }
}
