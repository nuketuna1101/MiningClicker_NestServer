// =================================================
// user.service.ts : 유저 로그인 로직의 처리
//=================================================
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userid: string): Promise<User> {
    return this.usersRepository.findOneBy({ userid });
  }

  async remove(userid: string): Promise<void> {
    await this.usersRepository.delete(userid);
  }
}
