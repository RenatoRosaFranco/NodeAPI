const express = require("express");
const app = express();

// req  = request
// resp = response
app.get('/', (req, res) => {
  res.send('Hello Browser');
});

app.listen(3001);