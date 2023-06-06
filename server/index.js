require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT, () => {
  console.log(`listening on on port ${process.env.PORT}`);
});

