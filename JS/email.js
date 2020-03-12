const nodemailer = require(`nodemailer`);
const pug = require(`pug`);
const htmlToText = require(`html-to-text`);

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