const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env'
});

// new Email(firstName, lastName, emailAddress, subject, message).sendEmail();

let greeting;
const date = new Date();
const hours = date.getHours();
let hour = date.getHours();
const minutes = date.getMinutes();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
let TimeOfDay;
let DayOfWeek;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if(hour >= 13 && minutes >= 0){
  hour  = hour - 12;
  if(hours < 12){
    TimeOfDay = 'AM';
  } else {
    TimeOfDay = 'PM';
  }
}

if (hour < 12) {
  greeting = `Good Morning`;
} else if (hour >= 12 && hour < 18) {
  greeting = `Good Afternoon`;
} else {
  greeting = `Good Evening`;
}

DayOfWeek = days[day];

module.exports = class Email {
  constructor(firstName, lastName, emailAddress, subject, message) {
    this.to = process.env.EMAIL_USERNAME;
    this.from = `${firstName} ${lastName} ${emailAddress}`;
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
          pass: process.env.SENDGRID_HASHED_PASSWORD
        }
      });
    }
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  // Send The Email

  // Send The Actual Email
  async send(template) {
    // Render the HTML based on a pug template.
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      to: this.to,
      from: this.from,
      firstName: this.firstName,
      lastName: this.lastName,
      subject: this.subject,
      greeting: this.greeting,
      message: this.message,
      day: day,
      DayOfWeek: DayOfWeek,
      month: months[month],
      year: year,
      hour: hour,
      minutes: minutes,
      TimeOfDay: TimeOfDay
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