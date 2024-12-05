// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, CI/CD with GitHub Actions for PradeepIT demo!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
