import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
  @Get('/:userId')
  getUser(@Param('userId')  userId: string) {
    return this.appService.getUser({userId});
  }
}
