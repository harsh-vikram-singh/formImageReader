const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/dist', express.static(path.join(__dirname, '../dist/')));

app.get('/', (req, res) => {
  res.send('ok')
})

app.post('/image_upload', async(req, res) => {
  console.log('POST /image_upload');
  res.json({serverResponse: 'OK'});
})

app.listen(port, () => {
  console.log(`Form Image Reader running at port : ${port}`);
})