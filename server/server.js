const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const _ = require('lodash');
const bodyparser = require('body-parser');
const express = require('express');

require('./config/config');
const { Contact } = require('./models/contact');
const app = express();
const port = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/Contacts-App');

app.use(bodyparser.json());

// GET
app.get('/contacts', (req, res) => {
  const contacts = Contact.find()
    .then(contacts => {
      res.send(contacts);
    })
    .catch(e => res.status(400).send(e));
});

// POST
app.post('/contacts', (req, res) => {
  const contactInfo = _.pick(req.body, [
    'name',
    'address',
    'company',
    'numbers',
    'emails'
  ]);
  const newContact = new Contact(contactInfo);
  newContact
    .save()
    .then(contact => {
      res.send(contact);
    })
    .catch(e => res.status(400).send(e));
});

// UPDATE
app.patch('/contacts/:id', (req, res) => {
  const id = req.params.id;
  const updates = _.pick(req.body, [
    'name',
    'address',
    'company',
    'numbers',
    'emails'
  ]);

  if (!ObjectID.isValid(id)) {
    return releaseEvents.status(404).send();
  }

  Contact.findOneAndUpdate({ _id: id }, { $set: updates }, { new: true })
    .then(contact => {
      if (!contact) {
        res.status(404).send();
      }
      res.send(contact);
    })
    .catch(e => res.status(400).send(e));
});

// DELETE
app.delete('/contacts/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return releaseEvents.status(404).send();
  }

  Contact.findOneAndRemove({ _id: id })
    .then(contact => {
      if (!contact) {
        return res.status(404).send();
      }
      res.send(contact);
    })
    .catch(e => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
