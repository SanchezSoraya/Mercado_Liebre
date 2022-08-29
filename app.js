const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
  console.log("Te logueaste correctamente");
  res.redirect("/");
});

app.get('/register', (req, res) => {
  console.log("Te registraste correctamente");
  res.sendFile(__dirname + '/views/register.html');
});

app.post("/register", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("servidor funcionando en el puerto 3000")
});

