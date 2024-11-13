import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body, @Res() res: Response) {
        const { username, password } = body;
        const user = await this.authService.validateUser(username, password);

        if (user) {
            // 로그인 성공
            return res.status(HttpStatus.OK).json({ message: 'Login successful', user });
        } else {
            // 로그인 실패
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        }
    }
}
