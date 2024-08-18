require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

let mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'recipient@example.com',
  subject: 'Contact Form Submission',
  text: 'Hello, this is the message content',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
