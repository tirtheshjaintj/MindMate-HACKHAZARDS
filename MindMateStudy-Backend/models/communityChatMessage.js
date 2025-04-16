import mongoose from "mongoose"
const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
        required: true,
    },
    content: {
        type: String,
    },
    media: {
        url: { type: String },   
        fileType: { type: String },       
        fileName: { type: String },        
        fileSize: { type: Number }        
    },
 

}, {
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema);
export default Message ;