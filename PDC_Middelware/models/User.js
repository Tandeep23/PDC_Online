
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  },
  password: {
    type: String,
    required: false,
  },
  otp: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
