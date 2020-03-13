const fs = require('fs');
const http = require('http');
const url = require('url');
const express = require('express');
const path = require(`path`);
const dotenv = require('dotenv');
const Email = require('./email');
dotenv.config({
  path: './config.env'
});
/////////////////////////////////
//  Start The Express App
const app = express();

console.log(process.env);
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
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`The application is now running on port: ${port}`);
});

app.post(`/contact.html`, (request, response) => {
  console.log(request.body);
  const yourEmail = new Email(request.body.fName, request.body.lName, request.body.email, request.body.subject, request.body.message);
  console.log(process.env.MAILTRAP_PORT);
  console.log(process.env.MAILTRAP_HOST);
  console.log(process.env.MAILTRAP_USERNAME);
  console.log(process.env.MAILTRAP_PASSWORD);
  yourEmail.sendEmail().catch((error) =>{
    console.log(`${error.message} - Your Email Was Not Sent!`);
  });
  response.sendFile(path.join(__dirname, '../public/contact.html'));
});