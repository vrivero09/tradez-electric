const express = require('express');
//const bodyParser = require('body-parser');
const path = require('path');
const publicPath = path.join(__dirname, "client", "build");
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(publicPath));

//app.set("view engine", "ejs");

app.get("*", (req,res)=>{
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("home");
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// // //app.use middleware
// // //express static in charge of sending static files req to client
// // app.use('/', express.static(path.join(__dirname, "client", "build")));

// //right before app.listen, add this:
// //"*" means 'catch all' route handler.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });