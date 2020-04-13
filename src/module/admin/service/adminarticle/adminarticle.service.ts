import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminarticleService {
  getArticle() {
    return {
      'article': 'this is article'
    }
  }
}
