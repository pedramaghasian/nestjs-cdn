import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetFilesDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}
