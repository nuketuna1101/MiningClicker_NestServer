// src/minerals/entities/assets.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAssets {
  @PrimaryGeneratedColumn('uuid')
  userid: string;

  @Column()
  money: number;

  @Column()
  diamond: number;

  @Column()
  emerald: number;

  @Column()
  ruby: number;

  @Column()
  opal: number;

  @Column()
  quartz: number;

  @Column()
  topaz: number;

  @Column()
  gold: number;

  @Column()
  silver: number;

  @Column()
  bronze: number;
}
