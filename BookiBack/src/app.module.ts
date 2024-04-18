import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [UserModule, HotelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
