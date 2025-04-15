import { IsBoolean, IsString } from "class-validator";
import { UpdateUser } from "../types/user.type";

export class UpdateUserDTO implements UpdateUser {
    @IsString()
    name: string;

    @IsBoolean()
    twoFactorEnabled: boolean;
}