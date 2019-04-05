'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest: './uploads/'});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.array('upfile', 1), function(req, res){
  console.log(req.files[0]);
  res.json({filename: req.files[0].originalname, size: req.files[0].size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
