/// Use Formidable
// var express = require('express');
// var formidable = require('formidable');

// var app = express();

// app.get('/', function (req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/fileupload', function (req, res){
//     var form = new formidable.IncomingForm();

//     form.parse(req)

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/uploads/' + `${Date.now()}_${file.name}`;
//     });

//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.name);
//     });

//     res.end('Upload successful');
// });

// app.listen(3000);

/// Use Multer
var express = require('express');
var multer = require('multer');
var upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

app.listen(3000);

///  Use Multer 2
// var express = require('express');
// var multer = require('multer');
// var ForgeSDK = require('forge-apis');

// // hard coding the credentials should be for testing only
// // set the env variable in deployment
// // you can also configure a start script like this:
// // AUTODESK_CLIENT_ID=<YOUR-CLIENT-ID> AUTODESK_CLIENT_SECRET=<YOUR-CLIENT-SECRET> AUTODESK_BUCKET=<YOUR-BUCKET-KEY> node index.js
// var AUTODESK_CLIENT_ID = process.env.AUTODESK_CLIENT_ID || 'YOUR-CLIENT-ID';
// var AUTODESK_CLIENT_SECRET = process.env.AUTODESK_CLIENT_SECRET || 'YOUR-CLIENT-SECRET';
// var AUTODESK_BUCKET = process.env.AUTODESK_BUCKET || 'YOUR-BUCKET-NAME';

// var upload = multer();

// var app = express();

// var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(
//     AUTODESK_CLIENT_ID,
//     AUTODESK_CLIENT_SECRET,
//     ['data:read', 'data:write','bucket:create','bucket:read'],
//     true // whether to auto refresh
// );

// var objectsAPI = new ForgeSDK.ObjectsApi();

// var token = '';

// //authenticate on start up
// oAuth2TwoLegged.authenticate().then((credentials) => {
//     token = credentials;
// }, (error) => {
//     console.log(error);
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/', upload.single('upload'), (req, res, next) => {
//     var objectName = req.file.originalname;
//     var contentLength = req.file.size;
//     objectsAPI.uploadObject(
//         AUTODESK_BUCKET,
//         objectName,
//         contentLength,
//         req.file.buffer,
//         {},
//         oAuth2TwoLegged,
//         token
//     ).then((uploadResponse) => {
//         console.log(uploadResponse);
//     }, (error) => {
//         console.log(error);
//     });
//     res.sendFile(__dirname + '/index.html');
// });

// console.log('Server Listening at port ' + 3000);
// app.listen(3000);
