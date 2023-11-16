import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/user.controller';
import { UserService } from './domain/services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
