const express = require(`express`);
const path = require(`path`);
const app = express();

app.set(`view engine`, `pug`);
app.set(`views`, path.join(__dirname, 'views'));
// Serving Static Files
app.use(`../`, express.static(path.join(__dirname, `public`)));

app.get(`/`, (req, res) => {
  res.status(200).render(`${__dirname}/../views/userEmail`);
});

app.post(`/send`, (req, res) => {
  console.log(req.body);
});

module.exports = app;