import {
  Controller,
  Get,
  HttpCode, HttpException,
  HttpStatus,
  Redirect,
  Req,
  RequestMapping,
  RequestMethod,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { BoardsService } from './service/boards.service';


@Controller("main")
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly boardsService: BoardsService) {}


  @Get('/exception')
  async throwException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }


  @Get('/async')
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get('/boardtest')
  boardtest(): Array<string> {

    let boards = this.boardsService.getBoards();
    return boards;
  }

  // @Get()
  // findAll2(): Observable<any[]> {
  //   return of([]);
  // }


  @Get('/')
  getHello(@Req() request: Request): string {
    //return this.appService.getHello();
    //console.log("request", request)

    return 'hello!!';
  }

  @Get('/redirect')
  @Redirect('https://nestjs.com', 301)


  /**
   * 특정 http 메서드들 집합에 반응하는 컨트롤러 메서드를 만들고 싶은데...
   * @param request
   */

  @RequestMapping( {method: RequestMethod.GET , path: '/test2'})
  //@Get('/test2')
  getHello2(@Req() request: Request, @Res() resp:Response): string {

    //console.log("resp!!!", resp)

    console.log("???")

    return 'hello test!!';
  }

  @HttpCode(204)
  @Get('/tes*3')
  getHello3(): string {

    //console.log("any",next.toString())

    return 'hello test3!!';
  }



}
