
class Person {

  //default는 public입니다.

  public name!: string;
  private age: number;
  protected static gender: string;

  public test():void {
    let dog:Animal = new Dog();
    dog.move();
  }

}


interface ediable {
  eat: () => boolean
  name:string;
  bark():void

}


class Cheeze implements  ediable {
  eat(): boolean {
    return false;
  }
  name: string;
  bark(): void {
    console.log("멍멍")
  }

}


class Animal {

  //static name:string = "Animal"

  public move (): void {
    console.log('Moving along')
  }
}

class Dog extends Animal {



  move() {

    //console.log(this.name)
    //super.move();
  }

  woof (times: number) {
    console.log('Woof! '.repeat(times))
  }
}
