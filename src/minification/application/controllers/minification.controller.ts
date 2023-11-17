import {
  Controller,
  Post,
  Body,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  Query,
  Get,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { MinificationService } from '../../domain/services/minification.service';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileFormatValidationPipe } from '../pipe/file-format-validation.pipe';
import { UploadDto } from '../dto/request/upload.dto';
import { MinificationResponseDto } from '../dto/response/upload.dto';
import { GetFilesDto } from '../dto/request/get-files.dto';

@Controller('files')
@ApiTags('Minification - Service')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class MinificationController {
  constructor(private readonly minificationService: MinificationService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(FileFormatValidationPipe)
  uploadFile(
    @Request() req,
    @Query() query: UploadDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<MinificationResponseDto> {
    const { minify } = query;
    return this.minificationService.uploadFile(req.user.username, file, minify);
  }

  @Get(':username')
  @ApiOperation({ summary: 'get users files' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  getUserFiles(@Param() param: GetFilesDto) {
    const {username} = param
    return this.minificationService.getUserFiles(username)
  }
}
