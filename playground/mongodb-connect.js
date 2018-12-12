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

    // db.collection('Contacts').insertOne(
    //   {
    //     name: 'Ragan Martinez',
    //     number: 123123123
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log('Unable to insert contact', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //   }
    // );

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne(
    //   {
    //     name: 'Ragan',
    //     age: 23,
    //     location: 'Australia'
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     console.log(
    //       JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2)
    //     );
    //   }
    // );
    client.close();
  }
);
