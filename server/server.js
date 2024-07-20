const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const { loadGraphModel } = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

// MongoDB connection
const dbURI = 'mongodb+srv://rohanmeshrampersonal1:Fo6Hc5EZqj13bx1N@cluster0.pqy9swi.mongodb.net/Discava';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connection Success'))
  .catch(err => console.log('DB Connection Failed', err));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Route for image upload and object detection
app.post('/upload', upload.single('ObjImg'), async (req, res) => {
  const imagePath = path.join(__dirname, 'uploads', req.file.filename);

  try {
    const model = await loadGraphModel('file://path/to/your/model/model.json');
    const imageBuffer = fs.readFileSync(imagePath);
    const tfimage = tf.node.decodeImage(imageBuffer);
    const expanded = tfimage.expandDims(0);
    const predictions = await model.executeAsync(expanded);

    res.json(predictions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing image');
  }
});

// Start server
app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
