const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('jello');
});
app.listen(3000, () => {
});
