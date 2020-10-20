const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    name: String,
    message: String,
    date: String
});

const Comments = mongoose.model('Comments', commentsSchema);

exports.storeComments = (name, message, date) => {
    var newComment = new Comments({
        name: name,
        message: message,
        date: date
    }) 
    return newComment
}

exports.getAllComments = async () => {
    let commentList = await Comments.find({})
    return commentList
}