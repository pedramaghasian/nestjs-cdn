import { IsBoolean, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MinificationResponseDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  filePath: string;

  @ApiProperty()
  size: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  date: Date;

  @ApiProperty({
    type: () => MinificationDto,
  })
  minification: MinificationDto;
}

export class MinificationDto {
  @ApiProperty()
  @IsBoolean()
  isMinify: boolean;

  @ApiProperty()
  @IsString()
  elapsedTime: string;

  @ApiProperty()
  @IsNumber()
  minifiedSize: number;
}
