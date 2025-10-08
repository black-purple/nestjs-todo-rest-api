import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    signup(@Body() data: RegisterDto) {
        return this.authService.signup(data);
    }

    @Post('login')
    signin(@Body() data: LoginDto) {
        return this.authService.signin(data);
    }
}