import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app/app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Qualquer coisa'
  }

  @Get('exemplo')
  exemplo (){
    return this.appService.solucionaExemplo();
  }
}
