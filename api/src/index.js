const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const AuthController = require('./controllers/auth');

const { auth, users } = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/auth', auth);
app.use('/users', users);

app.post('/login', AuthController.login);

mongoose.connect(
  process.env.DATABASE_URL,
  () => {
    console.log('connected to database');
    app.listen(8080, () => {
      console.log('server listening on http://127.0.0.1:8080');
    });
  }
);
