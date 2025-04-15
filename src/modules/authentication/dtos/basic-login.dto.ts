import { IsEmail, IsString } from "class-validator";
import { IBasicLogin } from "../interfaces/baisc-login.interface";

export class BasicLoginDTO implements IBasicLogin {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}