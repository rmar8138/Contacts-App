const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  numbers: [
    {
      number: {
        type: Number
      },
      typeOf: {
        type: String
      }
    }
  ],
  emails: [
    {
      email: {
        type: String
      },
      typeOf: {
        type: String
      }
    }
  ]
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact };
