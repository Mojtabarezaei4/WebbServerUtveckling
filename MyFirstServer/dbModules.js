const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/form', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

exports.store = (element) => {

    element.save()
    console.log("Successfully saved in database!")
}
