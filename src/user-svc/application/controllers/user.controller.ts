import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('User - Service')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User created successfully',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
