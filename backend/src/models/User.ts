import {model, Schema} from 'mongoose';

interface IUser extends Document {
    email: string;
    name: string;
    password: string;
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
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});


const User = model<IUser>('User', UserSchema);
export default User;