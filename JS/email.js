const express = require(`./../node_modules/express`);
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const nodemailer = require(`./../node_modules/nodemailer`);
const pug = require(`pug`);
const htmlToText = require(`html-to-text`);
const app = require(`./app`);
// const urlencodedParser = require(`./../node_modules/urlencodedParser`);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.post('/contact.html', express.urlencoded, (req, res) => {
  console.log(req.body);
  alert(req.body);
  return res.send(req.body);
});

// const htmlToText = require(`htmlToText`);

// new Email(firstName, lastName, emailAddress, subject, message).sendEmail();

let greeting;
const date = new Date();
const hours = date.getHours();

if (hours < 12) {
  greeting = `Good Morning`;
} else if (hours >= 12 && hours < 18) {
  greeting = `Good Afternoon`;
} else {
  greeting = `Good Evening`;
}

module.exports = class Email {
  constructor(firstName, lastName, emailAddress, subject, message) {
    this.to = process.env.EMAIL_USERNAME;
    this.from = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.greeting = greeting;
    this.message = message;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      ////////////////////
      // SendGrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        username: process.env.MAILTRAP_USERNAME,
        password: process.env.MAILTRAP_PASSWORD
      }
    });
  }

  // Send The Email

  // Send The Actual Email
  async send(template) {
    // Render the HTML based on a pug template.
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug}`, {
      firstName: this.firstName,
      lastName: this.lastName,
      subject: this.subject,
      greeting: this.greeting,
      message: this.message
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: html,
      text: htmlToText.fromString(html)
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendEmail() {
    await this.send(`userEmail`);
  }
};

const Email = require(`./email`);

const sendMessage = document.getElementById(`sendMessage`);

const first = document.getElementById(`fName`).value;
const last = document.getElementById(`lName`).value;
const emailValue = document.getElementById(`email`).value;
const subjectValue = document.getElementById(`subject`).value;
const messageValue = document.getElementById(`message`).value;

sendMessage.addEventListener('click', () => {
  let yourEmail = new Email(first, last, emailValue, subjectValue, messageValue);
  yourEmail.sendEmail();
  console.log(`My Goodness An Email!`);
  alert(`An Email Was Sent!`);
});
