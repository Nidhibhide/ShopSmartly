import { model } from 'mongoose';
import UserSchema from '../schema/UserSchema';
import { IUser } from '../types/userType';

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
