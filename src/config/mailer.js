const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '4d52a63ef0fbf5',
    pass: 'e4dd474180d491',
  },
});
