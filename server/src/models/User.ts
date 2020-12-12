import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string;
    discount: number;
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
});

export default model<IUser>('User', UserSchema);
