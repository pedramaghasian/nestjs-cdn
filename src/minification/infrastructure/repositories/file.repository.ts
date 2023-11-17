import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from '../../domain/model/file.model';

@Injectable()
export class FileRepository {
  constructor(@InjectModel(File.name) private fileModel: Model<File>) {}

  async createFile(data): Promise<any> {
    return new this.fileModel(data).save();
  }

  async findByUsername(username: string): Promise<any> {
    return this.fileModel.findOne({ username });
  }

  async getUserFiles(username: string): Promise<any> {
    return this.fileModel.find({ username }).sort({ date: -1 }).limit(100);
  }
}
