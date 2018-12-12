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

    db.collection('Contacts')
      .findOneAndUpdate(
        { _id: new ObjectID('5c10bb7028610afd2a4d0523') },
        {
          $set: {
            name: 'Big Lez'
          }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
