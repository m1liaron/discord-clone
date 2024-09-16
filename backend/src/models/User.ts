import {model, Schema} from 'mongoose';

export interface IUser extends Document {
    email: string;
    displayName: string;
    username: string;
    password: string;
    dateOfBirth: Date;
}

const UserSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        validate: {
            validator: (v: string) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
            message: 'Please fill a valid email address'
        },
    },
    displayName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    }
});


const User = model<IUser>('User', UserSchema);
export default User;