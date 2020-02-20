const express = require(`express`);

const App = express();
const log = console.log;
const path = require('path');

const PORT = 8080;

App.get('/', (req, res) => {
    res.sendFile(path.join(`__dirname`, `../PureNOvation/JS`,  `contact.html`));
});

App.listen(PORT, () => log(`Server is starting on PORT, `, 8080 ));


const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ncluff003@gmail.com',
      pass: 'agent003'
    }
  });
  
  var mailOptions = {
    from: 'ncluff003@gmail.com',
    to: 'superstar_003@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: `That was easy!`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });