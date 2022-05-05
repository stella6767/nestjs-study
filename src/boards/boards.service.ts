import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/CreateBoardDto';

@Injectable() //DI를 위한?
export class BoardsService {

  private boards = [];

  public getBoards(): any[] {
    return this.boards;
  }



  private testBoard():CreateBoardDto{
    let dto:CreateBoardDto;
    dto = new CreateBoardDto('title','content');
    return dto;
  }



}
