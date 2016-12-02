const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to the MongoDB server');

    // Delete Many
    // db.collection('Todos').deleteMany({text: 'Wash Car'}).then((result) => {
    //     console.log(result);
    // });

    // Delete One
    // db.collection('Todos').deleteOne({text: 'Wash Car'}).then((result) => {
    //     console.log(result);
    // });

    // Find One & Delete
    db.collection('Todos').findOneAndDelete({text: 'Smoke Weed'}).then((result) => {
        console.log(result);
    });

    // db.close();
});