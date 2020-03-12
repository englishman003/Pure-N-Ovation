const fs = require('fs');
const http = require('http');
const url = require('url');
const express = require('express');
const path = require(`path`);
const Email = require('./email');

/////////////////////////////////
//  Start The Express App
const app = express();


/////////////////////////////////
//  Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.set(`view engine`, `pug`);

// My routing likely will need to really involve exactly what pages I intend on getting to.  Hopefully, I also may not even need to recreate them, but if I do, I will.

/* Read File Syncronously Before The Event Loop From JSON Data*/
// const tours = JSON.parse(
//   fs.readFileSync(`$__dirname`/dev-data/data/tours/tours-simple.json)
// );

app.use(express.static(path.join(__dirname, '../public')));
/////////////////////////////////
//  Routing

app.get('/', (request, response) => {
  return response.sendFile(`${__dirname}/../public/index.html`);
});

app.post(`/contact.html`, (request, response) => {
  console.log(request.body);
  const yourEmail = new Email(request.body.fName, request.body.lName, request.body.email, request.body.subject, request.body.message);
  yourEmail.sendEmail().catch((error) =>{
    console.log(error);
  });
  response.sendFile(path.join(__dirname, '../public/contact.html'));
});

/*  This is what Jonas Did For The API Get Method With JSON Data */
// app.get('api/vq/tours', (request, response) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       message: 'Successful Data Transfer!'
//     }
//   });
// });

// app.get('/', (request, response) => {
//   return response.status(200).send('You are in the PureNOvation App.');
// });

// app.post('/', (request, response) => {
//   return response.status.send('You can post to this endpoint!');
// });

/////////////////////////////////
//  Start The Server
const port = 3333;
app.listen(port, () => {
  console.log(`The application is now running on port: ${port}`);
});

// // const Email = require(`./email`);
// // const nodemailer = require(`./../node_modules/nodemailer`);
// // const pug = require(`pug`);
// // const htmlToText = require(`html-to-text`);

// app.set(`view engine`, `pug`);
// app.set(`views`, path.join(__dirname, 'views'));
// // Serving Static Files
// app.use(`../`, express.static(path.join(__dirname, `public`)));

// app.get(`/`, (req, res) => {
//   res.status(200).render(`${__dirname}/../views/userEmail`);
// });

// app.post(`/submitForm`, (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

// module.exports = app;
