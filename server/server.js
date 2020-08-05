const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("home");
});

app.use('/', express.static(path.join(__dirname, '/client/build')));


app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));