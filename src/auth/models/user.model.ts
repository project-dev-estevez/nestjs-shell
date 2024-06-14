// user.model.ts
import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty({
    example: 'f2a5e0d6-8e3e-4f4f-8b7c-6f6f4e4e4f4e',
    description: 'Unique identifier for the user',
  })
  id: string;

  @ApiProperty({
    example: 'myemail2024@gmail.com',
    description: 'User email address',
  })
  email: string;

//   @ApiProperty({
//     example: 'Password123*',
//     description: 'User password'
//   })
//   password: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user'
  })
  fullName: string;

  @ApiProperty({
    example: true,
    description: 'Whether the user is active or not'
  })
  isActive: boolean;

  @ApiProperty({
    example: ['user'],
    description: 'Roles assigned to the user'
  })
  roles: string[];

  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'The date and time when the user was created'
  })
  createdAt: Date;

  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'The date and time when the user was last updated'
  })
  updatedAt: Date;
}