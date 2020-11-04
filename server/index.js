const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const port = 3000;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer( {storage: storage});

const app = express();

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/dist', express.static(path.join(__dirname, '../dist/')));
app.use(bodyParser.raw());
app.use(bodyParser.json());
// app.use(upload.array());

const parseData = (text) => {
  const textParts = text.split('\n');
  const info = {
    name: '',
    issueDate: '',
    expireDate: '',
    dateOfBirth: '',
    licenseNo: ''
  }
  textParts.forEach(part => {
    if (part.includes('1 ')) {
      info.name = part.split(' ')[1];
    } else if (part.includes('DOB')) {
      info.dateOfBirth = part.split(' ')[2];
    } else if (part.includes('LIC#')) {
      info.licenseNo = part.split(' ')[2];
    } else if (part.includes('4a Iss')) {
      info.issueDate = part.split(' ')[2];
    } else if (part.includes('4b Exp')) {
      info.expireDate = part.split(' ')[2];
    }
  })
  return info;
}

app.get('/', (req, res) => {
  res.json({serverResponse: 'OK'});
})

app.post('/image_upload', upload.single('image'), async(req, res) => {
  console.log('POST /image_upload');
  // console.log('body: ',req.body);
  // console.log('file: ', req.file);
  console.log('detecting text...')
  const [result] = await client.textDetection(`./uploads/${req.file.originalname}`);
  const detections = result.textAnnotations;
  // console.log('Text:');
  // detections.forEach(text => console.log(text));
  // console.log(detections[0].description);
  console.log('parsing...')
  let parsed = parseData(detections[0].description);
  console.log('done :)');
  await res.json(parsed);
})

app.listen(port, () => {
  console.log(`Form Image Reader running at port : ${port}`);
})