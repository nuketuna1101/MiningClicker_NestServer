// src/minerals/minerals.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAssets } from './assets.entity';

@Injectable()
export class UserAssetsService {
  constructor(
    @InjectRepository(UserAssets)
    private userassetsRepository: Repository<UserAssets>,
  ) {}

  create(userAsset: UserAssets): Promise<UserAssets> {
    return this.userassetsRepository.save(userAsset);
  }

  findAll(): Promise<UserAssets[]> {
    return this.userassetsRepository.find();
  }
}
