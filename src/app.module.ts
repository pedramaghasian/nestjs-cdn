import { Module } from '@nestjs/common';
import { UserModule } from './user-svc/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
