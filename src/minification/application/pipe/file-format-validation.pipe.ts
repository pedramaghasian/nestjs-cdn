import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class FileFormatValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const { type } = metadata;
      if (type !== 'custom') {
        return value;
      }
      const validTypes = [
        'text/javascript',
        'text/css',
        'application/javascript',
        'application/css',
      ];
      const { mimetype } = value;
      if (!mimetype) {
        throw new Error('mimetype not exist');
      }
      if (!validTypes.includes(mimetype)) {
        throw new Error('Invalid file type.');
      }
      return value;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Invalid file type. Allowed types: .js, .css',
      );
    }
  }
}
