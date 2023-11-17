import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './domain/model/user.model';
import { UserRepository } from './infrastructure/repositories/user.repository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
