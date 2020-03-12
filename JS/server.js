const express = require(`express`);
const path = require(`path`);
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env'
});
const app = express();

app.set(`view`, path.join(__dirname, 'views'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/../views/userEmail`);
});

app.post(`/contact.html`, (request, response) => {
  const postBody = request.body;
  console.log(postBody);
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
