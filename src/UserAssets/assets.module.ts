import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAssetsService } from './assets.service';
import { UserAssetsController } from './assets.controller';
import { UserAssets } from './assets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAssets])],
  providers: [UserAssetsService],
  controllers: [UserAssetsController],
})
export class UserAssetsModule {}
