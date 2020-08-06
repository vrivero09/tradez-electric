const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('express-favicon');

const app = express();
const port = process.env.PORT || 5000;
app.set('port',port);

const publicPath = path.join(__dirname, "build");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(__dirname + '/build/favicon.ico'));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/home', function (req, res) {
 return res.send('I am home');
});


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

