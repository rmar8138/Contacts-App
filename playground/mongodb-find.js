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

    // db.collection('Contacts')
    //   .find({ _id: new ObjectID('5c10921828610afd2a4cf8a2') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Contacts');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch contacts', err);
    //     }
    //   );

    db.collection('Contacts')
      .find()
      .count()
      .then(
        count => {
          console.log('Contacts');
          console.log(`Contacts count: ${count}`);
        },
        err => {
          console.log('Unable to fetch contacts', err);
        }
      );
    // client.close();
  }
);
