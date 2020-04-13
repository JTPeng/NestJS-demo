import { Injectable } from '@nestjs/common';

@Injectable()
export class ServernewsService {
  allserverNews() {
    return [
      { 'title': '新闻服务标题-1' },
      { 'title': '新闻服务标题-2' },
      { 'title': '新闻服务标题-3' },
      { 'title': '新闻服务标题-4' },
      { 'title': '新闻服务标题-5' },
      { 'title': '新闻服务标题-6' }
    ]
  }
}
