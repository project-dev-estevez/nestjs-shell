import { Reflector } from '@nestjs/core';
import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/auth/entities/user.entity';
import { META_ROLES } from 'src/auth/decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles: string[] = this.reflector.get<string[]>(META_ROLES, context.getHandler());

    if( !validRoles ) return true;
    if ( validRoles.length === 0 ) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if( !user )
      throw new BadRequestException('User not found');

    for (const role of user.roles) {
      if( validRoles.includes(role) ) return true;
    }

    throw new ForbiddenException(`User ${user.fullName} does not have the required roles to access this route`);
  }

}
