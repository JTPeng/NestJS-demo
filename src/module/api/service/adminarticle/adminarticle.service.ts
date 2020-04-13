import { Injectable } from '@nestjs/common';
@Injectable()
export class AdminarticleService {
  getArticle() {
    return {
      'apiArticle': 'this is apiArticle'
    }
  }
}
