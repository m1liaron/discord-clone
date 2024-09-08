import mongoose, {model, Schema} from "mongoose";

interface IConversation extends Document {
    participants: [mongoose.Schema.Types.ObjectId],
    messages: [mongoose.Schema.Types.ObjectId]
}

const ConversationSchema: Schema<IConversation> = new Schema({
   participants: [{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User',
   }],
   messages: [{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'Message',
   }]
});

const Conversation = model<IConversation>("Conversation", ConversationSchema);
export default Conversation;