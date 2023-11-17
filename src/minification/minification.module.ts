import { Module } from '@nestjs/common';
import { MinificationController } from './application/controllers/minification.controller';
import { MinificationService } from './domain/services/minification.service';
import { FileRepository } from './infrastructure/repositories/file.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema, File } from './domain/model/file.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  controllers: [MinificationController],
  providers: [MinificationService, FileRepository],
  exports: [MinificationService],
})
export class MinificationModule {}
