import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotel/hotel.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),UserModule, HotelModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
