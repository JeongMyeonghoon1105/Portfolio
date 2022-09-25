const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/post', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log("Server Running On Port 3000");
});