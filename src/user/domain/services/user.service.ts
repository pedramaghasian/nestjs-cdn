import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findByUsername(username: string): Promise<IUser | undefined> {
    return this.userRepository.findByUsername(username);
  }

  async createUser(data: IUser): Promise<IUser | undefined> {
    return this.userRepository.createUser(data);
  }
}
