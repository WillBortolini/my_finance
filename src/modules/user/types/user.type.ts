import { User } from "../interfaces/user.interface";

export type CreateUser = Omit<User, 'id' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export type UpdateUser = Pick<User, 'name' | 'twoFactorEnabled'>