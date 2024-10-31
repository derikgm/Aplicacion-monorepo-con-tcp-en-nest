import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './microservices/math.service';
import { StringService } from './microservices/string.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private mathService : MathService,
    private stringService: StringService
    ) { }
  
private logger = new Logger('AppController')

  @Post('Sum')
  async sumNumbers(@Body('data') data: Array<number>) {
    return this.mathService.SumNumbers(data)
  }

  @Post('string')
  async revisarString(@Body('data') data: Array<string>) {
    return this.stringService.revisarString(data)
  }


}
