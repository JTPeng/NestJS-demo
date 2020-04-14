import { Injectable } from '@nestjs/common';

@Injectable()
export class TotaluserService {
  getUserService(){
    return {
      'userService':'this is userService page message'
    }
  }
}
