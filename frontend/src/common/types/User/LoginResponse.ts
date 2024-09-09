import { type User } from './user.types';

export type LoginResponse = {
    token: string;
    user: User
};