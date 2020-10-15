const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Element = mongoose.model('Element', personSchema);

exports.createPerson = (name, email) =>{
    var newElement = new Element({
        name: name,
        email: email
    }) 
    return newElement
}