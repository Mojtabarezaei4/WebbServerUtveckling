const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Person = mongoose.model('Person', personSchema);

exports.createPerson = (name, email, password) =>{
    var newPersons = new Person({
        name: name,
        email: email,
        password: password
    }) 
    return newPersons
}

exports.getAllPersons = async () => {
    let personsList = await Person.find({})
    return personsList
} 

exports.getOnePerson = async (email) => {
    let personsList = await Person.findOne({email: email})
    return personsList
} 