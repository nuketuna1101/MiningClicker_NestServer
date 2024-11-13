import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersRepository.findOne({ where: { username } });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log("[AUTH] Password match result:", isMatch);
            if (isMatch) {
                console.log("[AUTH] validateUser: matched!");
                return user;
            }
        }
        console.log("[AUTH] validateUser: NOT matched");
        console.log(username);
        console.log(password);
        console.log(user);
        return null;  // 로그인 실패 시 null 반환
    }
}
