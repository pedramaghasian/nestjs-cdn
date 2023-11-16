import { Module } from '@nestjs/common';
import { UserModule } from './user-svc/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import config from 'config';

@Module({
  imports: [
    MongooseModule.forRoot(config.get<string>('mongodb.uri')),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
