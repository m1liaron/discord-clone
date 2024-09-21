import {model, Schema} from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

export interface IUser extends Document {
    email: string;
    displayName: string;
    username: string;
    password: string;
    dateOfBirth: Date;
    createJWT: () => string;
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

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.createJWT = async function () {
    return jwt.sign(
        { id: this._id, email: this.email},
        process.env.JWT_SECRET || '',
        {
            expiresIn: process.env.JWT_EXPIRES,
        }
    )
}

const User = model<IUser>('User', UserSchema);
export default User;