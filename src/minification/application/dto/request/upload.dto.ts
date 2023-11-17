import { IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadDto {
  @ApiProperty({type:Boolean,default:true})
  @IsBoolean()
  @IsNotEmpty()
  readonly minify: boolean;
}
