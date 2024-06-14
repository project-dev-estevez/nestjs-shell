import { Controller, Post, Body, Get, UseGuards, HttpCode, Req, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
// import { AuthGuard } from '@nestjs/passport';
// import { GetUser } from './decorators/get-user.decorator';
// import { User } from './entities/user.entity';
// import { RawHeaders } from 'src/common/decorators/raw-headers.decorator';
// import { UserRoleGuard } from './guards/user-role/user-role.guard';
// import { RoleProtected } from './decorators/role-protected.decorator';
// import { ValidRoles } from './interfaces';
// import { Auth } from './decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  @HttpCode(200)
  loginUser(@Body() loginUserDto: LoginUserDto){
    return this.authService.login(loginUserDto);
  }

  // @Get('private')
  // @UseGuards( AuthGuard() )
  // testingPrivateRoute(
  //   @GetUser('email') user: User,
  //   @RawHeaders() headers: string[]
  // ) {
  //   return {
  //     message: 'This is a private route',
  //     status: 200,
  //     user,
  //     headers
  //   };
  // }

  // @Get('private2')
  // @RoleProtected( ValidRoles.superUser )

  // // @SetMetadata('roles', ['admin', 'super-user'])
  // @UseGuards( AuthGuard(), UserRoleGuard )
  // private2(
  //   @GetUser() user: User,
  // ) {
  //   return {
  //     message: 'This is a private route',
  //     status: 200,
  //     user
  //   };
  // }


  // @Get('private3')
  // @Auth( ValidRoles.superUser )
  // private3(
  //   @GetUser() user: User,
  // ) {
  //   return {
  //     message: 'This is a private route 3',
  //     status: 200,
  //     user
  //   };
  // }

}
