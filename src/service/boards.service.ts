import {
  BeforeApplicationShutdown,
  Injectable, Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateBoardDto } from '../controller/boards/dto/CreateBoardDto';

/**
 * 공급자, provider..
 */

@Injectable() //DI를 위한?
export class BoardsService implements OnModuleInit, OnModuleDestroy, OnApplicationBootstrap, OnApplicationShutdown, BeforeApplicationShutdown{

  private readonly logger = new Logger(BoardsService.name);

  private readonly boards = [];

  public getBoards(): any[] {
    return this.boards;
  }


  create(board){
    this.boards.push(board)
  }


  private testBoard():CreateBoardDto{
    let dto:CreateBoardDto;
    dto = new CreateBoardDto('title','content');

    let createBoardDto:CreateBoardDto = new CreateBoardDto('title2', 'content2');
    createBoardDto = new CreateBoardDto('title2', 'content3');

    return dto;
  }


  findOne(id: number) {
    return Promise.resolve(undefined);
  }

  onModuleInit(): any {

    console.log("init!!!!!");
    this.logger.log("init!!!!!");
  }

  onApplicationBootstrap(): any {
    this.logger.log("onApplicationBootstrap!!!!!");

  }

  onApplicationShutdown(signal?: string): any {

    this.logger.log('beforeApplicationShutdown!!!!' + signal);

  }

  onModuleDestroy(): any {
    this.logger.log('onModuleDestroy!!!!!!');

  }

  beforeApplicationShutdown(signal?: string): any {
  }
}


/*
일반적으로 요청 수명주기는 다음과 같습니다.

들어오는 요청
글로벌 바운드 미들웨어
모듈 바운드 미들웨어
글로벌 가드
컨트롤러 가드
루트 가드
글로벌 인터셉터 (프리 컨트롤러)
컨트롤러 인터셉터 (프리 컨트롤러)
라우트 인터셉터 (프리 컨트롤러)
글로벌 파이프
컨트롤러 파이프
라우트 파이프
라우트 매개 변수 파이프
컨트롤러 (메소드 핸들러)
서비스 (존재하는 경우)
라우트 인터셉터 (요청 후)
컨트롤러 인터셉터 (사후 요청)
글로벌 인터셉터 (요청 후)
예외 필터 (라우트, 컨트롤러, 글로벌 순)
서버 응답

*/
