var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('express-favicon');
const { default: Contact } = require('../client/src/components/contact');
const { default: Services } = require('../client/src/components/services');
const { default: Home } = require('../client/src/components/home');
const { default: About } = require('../client/src/components/about');

const app = express();
const port = process.env.PORT || 5000;
app.set('port',port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/Home', function (req, res) {
 return res.send(Home);
});

app.get('/Services', function (req, res) {
  return res.send(Services);
 });

 app.get('/Contact', function (req, res) {
  return res.send(Contact);
 });

 app.get('/About', function (req, res) {
  return res.send(About);
 });

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

// // //app.use middleware
// // //express static in charge of sending static files req to client
// // app.use('/', express.static(path.join(__dirname, "client", "build")));

// //right before app.listen, add this:
// //"*" means 'catch all' route handler.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });

// app.get('/', (req, res) => {
//   res.send("home");
// });

//API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

