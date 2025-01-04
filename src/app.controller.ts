import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Body, Post, Render, Res} from '@nestjs/common/decorators'
import { last } from 'rxjs';

/* Este es mi controlador */

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("login.hbs")
  getHello() {
    return { message:"My model Data" };
  }

  @Render('userinfo')
  @Post()
    public async displayFormRespons(@Body() params:any, @Res() res:Response) {
        /* Este es el modelo: */
        return {
          user_id: 323232323,
          email: params.username + "@gmail.com",
          name: params.username,
          last_name: "Doe",
          username: params.username,
          age: 23,
          gender: "M",
        }; 
    }


}
