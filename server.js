const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/Projects', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/Stacks', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/Blog', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = process.env.PORT || 3000

app.listen(PORT);