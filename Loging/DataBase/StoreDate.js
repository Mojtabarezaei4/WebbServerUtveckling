const mongoose = require('mongoose')

const dateSchema = new mongoose.Schema({
    date: String
});

const Date = mongoose.model('Date', dateSchema);

exports.createDate = (date) =>{
    var newDate = new Date({
        date: date
    }) 
    return newDate
}

exports.getAllDates = async () => {
    let dateList = await Date.find({})
    return dateList
}