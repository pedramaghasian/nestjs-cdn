import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUser } from '../../domain/interfaces/user';
import { User } from '../../domain/model/user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(data: CreateUserDto): Promise<any> {
    return new this.userModel(data).save();
  }

  async findByUsername(username: string): Promise<any> {
    return this.userModel.findOne({ username });
  }

  async findByEmail(email: string): Promise<any> {
    return this.userModel.findOne({ email });
  }

  async update(id: string, payload: Partial<IUser>) {
    return this.userModel.updateOne({ _id: id }, payload);
  }
}