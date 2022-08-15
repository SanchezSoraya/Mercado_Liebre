const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen(3000, () => {
  console.log("servidor funcionando en el puerto 3000")
});