import { UserRole } from "../../../../src/modules/user/enums/user-role.enum";
import { UserStatus } from "../../../../src/modules/user/enums/user-status.enum";
import { User } from "../../../../src/modules/user/interfaces/user.interface";

export const userMock: User = {
    id: 0,
    email: '',
    password: '',
    name: '',
    document: '',
    cellphone: '',
    twoFactorEnabled: false,
    status: UserStatus.ACTIVE,
    role: UserRole.ADM,
    createdAt: new Date(),
    updatedAt: new Date()
}