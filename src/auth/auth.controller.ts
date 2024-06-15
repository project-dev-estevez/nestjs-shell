import { Controller, Post, Body, Get, HttpCode } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { Auth, GetUser } from './decorators';
import { User } from './entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  createUser( @Body() createUserDto: CreateUserDto ) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  @HttpCode(200)
  loginUser( @Body() loginUserDto: LoginUserDto ){
    return this.authService.login(loginUserDto);
  }

  @Get('check-token')
  @ApiBearerAuth()
  @Auth()
  checkAuthStatus( @GetUser() user: User ) {
    return this.authService.check( user );
  }

}
