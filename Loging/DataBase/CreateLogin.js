const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Persons = mongoose.model('Persons', personSchema);

exports.createPerson = (name, email, password) =>{
    var newPersons = new Persons({
        name: name,
        email: email,
        password: password
    }) 
    return newPersons
}

exports.getAllPersons = async () => {
    let nameList = await Persons.find({})
    return nameList
} 