import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminuserService {
  getUser() {
    return {
      'user': 'this is user'
    }
  }
}
