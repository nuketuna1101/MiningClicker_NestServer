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
            console.log("[AUTH] password: " + typeof password);
            console.log("[AUTH] user.password: " + typeof user.password);
            console.log("[AUTH] 1: " + (password == user.password));
            console.log("[AUTH] 2: " + (password === user.password));
            // bcrypt 제거 버전
            // const isMatch = await bcrypt.compare(password, user.password);
            const isMatch = password == user.password;
            console.log("[AUTH] Password match result:", isMatch);
            if (isMatch) {
                console.log("[AUTH] validateUser: matched!");
                return user;
            }
        }
        console.log("[AUTH] validateUser: NOT matched");
        return null; 
    }
}
