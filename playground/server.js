const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Contacts-App');

const Contact = mongoose.model('Contact', {
  name: {
    type: String
  },
  address: {
    type: String
  },
  mobileNumber: {
    type: Number
  }
});

const newContact = new Contact({
  name: 'Ragan Martinez',
  address: '123 Fake St',
  mobileNumber: 123123123
});

newContact
  .save()
  .then(doc => {
    console.log('Saved todo', doc);
  })
  .catch(e => console.log(e));
