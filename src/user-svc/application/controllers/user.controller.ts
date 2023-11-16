import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('User - API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }
}
