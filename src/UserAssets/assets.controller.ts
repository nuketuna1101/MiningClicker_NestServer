// src/minerals/minerals.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserAssetsService } from './assets.service';
import { UserAssets } from './assets.entity';

@Controller('minerals')
export class UserAssetsController {
  constructor(private readonly userassetsService: UserAssetsService) {}

  @Post()
  create(@Body() mineral: UserAssets): Promise<UserAssets> {
    return this.userassetsService.create(mineral);
  }

  @Get()
  findAll(): Promise<UserAssets[]> {
    return this.userassetsService.findAll();
  }
}
