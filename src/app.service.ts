import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProduct(): string {
    return 'this is productPage'
  }

  otherModuld(){
    return 'other module use total service'
  }
}
