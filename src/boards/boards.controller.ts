import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {

  private boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }


  @Get("/boards")
  getAllBoard(){
    return this.boardsService.getBoards();
  }



}
