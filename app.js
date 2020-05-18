const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Garage from Christine!");
});
 
module.exports.app = app;
