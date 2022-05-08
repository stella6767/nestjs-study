import { Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { BoardsService } from '../../service/boards.service';
//import { LoggingInterceptor } from '../../interceptor/logging.interceptor';


//@UseInterceptors(new LoggingInterceptor())
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

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.findOne(id);
  }




}
