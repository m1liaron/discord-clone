import mongoose, { model, Schema } from 'mongoose';

interface IMessage extends Document {
    senderId: mongoose.Schema.Types.ObjectId,
    receiverId: mongoose.Schema.Types.ObjectId,
    message: string,
}

const MessageSchema: Schema<IMessage> = new Schema({
    senderId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true,
   },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   message: {
       type: String,
       required: true,
   }
});

const Message = model<IMessage>('Message', MessageSchema);

export default Message;