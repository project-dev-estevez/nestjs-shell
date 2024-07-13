import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have an Uppercase, lowercase letter, and a number'
    })
    password: string;

    @IsString()
    @MinLength(1)
    fullName: string;

    @IsString()
    @MinLength(1)
    document: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    phoneNumber2: string;

    @IsString()
    @IsNotEmpty()
    sponsor: string;

    // @IsBoolean()
    // @IsNotEmpty()
    // termsAccepted: boolean;

    // @IsBoolean()
    // @IsNotEmpty()
    // dataUsageAuthorization: boolean;
}