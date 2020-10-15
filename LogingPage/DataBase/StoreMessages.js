const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
    message: String
});

const Message = mongoose.model('Message', messagesSchema);

exports.storeMessages = (message) => {
    var newMessage = new Message({
        message: message
    }) 
    return newMessage
}

exports.getAllMessages = async () => {
    let messageList = await Message.find({});
    return messageList
}