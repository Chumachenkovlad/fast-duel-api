import { Module } from '@nestjs/common';
import { ConfigModule } from 'config/config.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { CardsModule } from './cards/cards.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriesModule, CardsModule, FirebaseModule, ImagesModule]
})
export class AppModule {}
