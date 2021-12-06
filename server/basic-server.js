const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyparser = express.json({ strict: false })
// const jsonParser = express.json({ strict: false })
const PORT = 5000;


//cors미들웨어로 options 메소드 HTTP요청 끝
app.use(cors())
app.use(bodyparser)
// app.use(express.static('client'))

// GET 요청
// app.get('/', function (req, res) {
//   res.send('get leehyeongeol')
//   console.log('SUCCESS')
// })

//POST 요청시 body를 jsonParser로 처리
app.post('/lower', function (req, res) {
  let result = req.body
  result = result.toLowerCase()
  console.log(result)
  res.json(result)
})

app.post('/upper', function (req, res) {
  let result = req.body
  result = result.toUpperCase()
  console.log(result)
  res.json(result)
})

app.use((req, res) => {
  res.status(400).send('invalid user')
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})










// const http = require('http');

// const PORT = 5000;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );
//   response.writeHead(200, defaultCorsHeader);
//   response.end('hello mini-server sprints');
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };
