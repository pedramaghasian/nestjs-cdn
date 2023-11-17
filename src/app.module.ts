import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { MinificationModule } from './minification/minification.module';
import config from 'config';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/global.exceptoin';

@Module({
  imports: [
    MongooseModule.forRoot(config.get<string>('mongodb.uri')),
    UserModule,
    AuthModule,
    MinificationModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
