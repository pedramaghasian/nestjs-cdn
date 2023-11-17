import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileDocument = HydratedDocument<File>;

@Schema()
export class File {
  @Prop({ required: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  filePath: string;

  @Prop({ required: true, type: Number })
  size: number;

  @Prop({ required: true, type: String })
  type: string;

  @Prop({ required: true, type: String })
  date: string;

  @Prop({ required: true, type: Object })
  minification: {
    isMinify: boolean;
    elapsedTime: string;
    minifiedSize: number;
  };
}

export const FileSchema = SchemaFactory.createForClass(File);
