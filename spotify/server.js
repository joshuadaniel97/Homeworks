const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {v4: uuid} = require("uuid")

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4000;

app.use(express.static(path.join(__dirname, 'views')))

// const dataBase = [{id: 1, email: "foraxample@gmail.com", password: "12345", profile: "forexample"}]

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get('/signup', (req, res) => {
  console.log(req.body)
  res.sendFile(__dirname + '/views/index.html')
})

let spotifySignUp = []


app.post('/submit', (req, res) => {
  const data = req.body;
  spotifySignUp.push({...data, id : uuid(), email: req.body.email, password: req.body.password, profile: req.body.profile})
  console.log(spotifySignUp)
  // res.sendFile(__dirname + '/views/confirmation.html')
  res.redirect('http://localhost:4000/confirm-user/:id')
})

app.get('/confirm-user/:id', (req, res) => {
  let userId = req.params.id;
  const user = spotifySignUp.find(user => user.id === userId)
  console.log(user)
  res.sendFile(__dirname + '/views/confirmation.html')
})








// app.post('/user/signup', (req, res) => {
//   const data = req.body;
//   spotifySignUp.push({...data, id : uuid()})
//   res.send(spotifySignUp)
// })














app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});