export class CreateBoardDto {
  private _title:string;
  private _content:string;


  constructor(title: string, content: string) {
    this._title = title;
    this._content = content;
  }




  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}


/**
 * JAVA에서는 매개변수가 있는 생성자와 매개변수가 없는 생성자로 여러 개를 생성할 수 있지만,
 * TS 및 JS에서는 메소드 오버로딩을 지원하지 않기 때문에 생성자 함수를 class당 하나만 호출할 수 있다.
 */