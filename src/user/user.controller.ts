/*
 * @Author: kewin.Pengjiantian 
 * @Date: 2020-04-11 23:37:03 
 * @Last Modified by:   kewin.Pengjiantian 
 * @Last Modified time: 2020-04-11 23:37:03 
 */
import { Controller, Get, Query, Request, Post, Body } from '@nestjs/common';

// get post请求以及获取的请求参数
@Controller('user')
export class UserController {
  // http://localhost:3000/user
  @Get()
  index() {
    return 'this is usersPage'
  }

  // 获取Get请求参数的2种方法
  // http://localhost:3000/user/add?a=123&name=xiaoming
  // 方法一：通过@query装饰器获取get传值
  @Get('add')
  addUser(@Query() query) {
    console.log(query)
    return query
  }

  // @Query()中的可选参数
  // http://localhost:3000/user/addUserQuery?id=123
  // 如@Query('id') id等价于@Query() query 中query.id
  @Get('addUserQuery')
  addUserQuery(@Query('id') id) {
    console.log(id)
    return 'Query中的可选参数'
  }

  // http://localhost:3000/user/edit?age=18&name=xiaoming
  // 方法二：
  @Get('edit')
  editUser(@Request() req) {
    console.log(req.query)
    return '这是通过@Request进行传值'
  }

  // Post请求
  // http://localhost:3000/user/create
  @Post('create')
  create() {
    return '这是post发送的请求'
  }

  // post请求获取参数
  // http://localhost:3000/user/addCreate
  @Post('addCreate')
  addCreate(@Body() body) {
    console.log(body)
    return 'post请求获取参数'
  }
}
