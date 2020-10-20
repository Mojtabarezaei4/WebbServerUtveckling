const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Persons = mongoose.model('Persons', personSchema);

exports.createPerson = (name, email) =>{
    var newPersons = new Persons({
        name: name,
        email: email
    }) 
    return newPersons
}

exports.getAllPersons = async () => {
    let nameList = await Persons.find({})
    return nameList
}