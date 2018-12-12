const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/Contacts-App',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('Contacts-App');
    // deleteMany
    // db.collection('Contacts')
    //   .deleteMany({ name: 'Test' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // deleteOne
    // db.collection('Contacts')
    //   .deleteOne({ name: 'Test' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    // db.collection('Contacts')
    //   .findOneAndDelete({ _id: new ObjectID('5c10921828610afd2a4cf8a2') })
    //   .then(result => {
    //     console.log(result);
    //   });

    // client.close();
  }
);
