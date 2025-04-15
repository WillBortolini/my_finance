import { IsBoolean, IsEmail, IsEnum, IsNumberString, IsString } from "class-validator";
import { CreateUser } from "../types/user.type";
import { UserRole } from "../enums/user-role.enum";

export class CreateUserDTO implements CreateUser {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsString()
    document: string;

    @IsNumberString()
    cellphone: string;

    @IsBoolean()
    twoFactorEnabled: boolean;

    @IsEnum(UserRole)
    role: UserRole;
}