import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uglifycss from 'uglifycss';
import * as uglifyjs from 'uglify-js';
import { performance } from 'perf_hooks';
import { FileRepository } from '../../infrastructure/repositories/file.repository';

@Injectable()
export class MinificationService {
  constructor(private FileRepository: FileRepository) {}

  async uploadFile(username, file, minify) {
    try {
      const baseDir = '/opt';
      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir);
      }

      const userDir = path.join(baseDir, username);
      if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir);
      }

      const { originalname, buffer, mimetype, size } = file;

      const filePath = path.join(userDir, originalname);

      let fileContent = buffer.toString('utf-8');

      minify = minify === 'true' ? true : false;
      let elapsedTime = 0;
      if (minify) {
        const startTime = performance.now();
        if (mimetype.includes('/css')) {
          fileContent = uglifycss.processString(fileContent);
        } else if (mimetype.includes('/javascript')) {
          const result = uglifyjs.minify(fileContent);
          fileContent = result.code;
        }
        const endTime = performance.now();
        elapsedTime = endTime - startTime;
      }

      fs.writeFileSync(filePath, fileContent);

      const result = {
        username,
        filePath,
        size,
        type: mimetype,
        date: new Date(),
        minification: {
          isMinify: minify,
          elapsedTime: `${elapsedTime} ms`,
          minifiedSize: minify ? Buffer.from(fileContent).length : 0,
        },
      };
      await this.FileRepository.createFile(result);
      return result;
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  }

  async getUserFiles(username) {
    return this.FileRepository.getUserFiles(username);
  }
}
