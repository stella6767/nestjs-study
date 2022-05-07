import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from '../controller/boards/dto/CreateBoardDto';

/**
 * 공급자, provider..
 */

@Injectable() //DI를 위한?
export class BoardsService {

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
}
