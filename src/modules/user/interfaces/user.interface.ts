import { UserRole } from "../enums/user-role.enum";
import { UserStatus } from "../enums/user-status.enum";

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    document: string;
    cellphone: string;
    twoFactorEnabled: boolean;
    status: UserStatus;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}