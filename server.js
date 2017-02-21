const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-fetch');

const app = express();
const api = express.Router();

const hostname = 'https://www.v2ex.com';
const port = 8001;
api
  .get('/topics/hot.json', (req, res) => {
    const path = req.originalUrl.replace('//api/', '');
    const url = hostname + path;
    fetch(url).then(data => data.json()).then(json =>
      res.send(json)).catch((e) => {
        console.log(e);
      });
  })
  .get('/topics/:id', (req, res) => {
    const url = `${hostname}/api/topics/show.json?id=${req.params.id}`;
    fetch(url).then(data => data.json()).then((json) => {
      res.send(json);
    }).catch((e) => {
      console.log(e);
    });
  });

app.use(cors());
app.use('/api', api);

app.listen(port, () => {
  console.log(`server has been listening on port:${port}`);
});
