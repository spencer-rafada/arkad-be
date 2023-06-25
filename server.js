const express = require('express');
const app = express();

// Setting up Middlewares
app
  .use(express.json())
  .use(express.urlencoded())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
    next();
  });

app.use('/', require('./routes/index'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server is listening at port ' + (process.env.PORT || 3000));
});
