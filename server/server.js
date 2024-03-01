const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./middleware/passport');
const app = express();

app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// app.use(express.json());

// express session 
app.use(session({
  secret: process.env.jwtSecret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Base route
app.get("/home", (req, res) => {
  res.send("Home Page")
})

app.get('/', (req, res) => {
  res.send('API running');
});

// Define Routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/pleaseverify', require('./routes/api/pleaseverify'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/google', require('./routes/api/google'));
app.use('/api/google/callback', require('./routes/api/google/callback'));
app.use('/api/google/failed', require('./routes/api/google/failed'));
app.use('/api/google/success', require('./routes/api/google/success'));
app.use('/api/google/logout', require('./routes/api/google/logout'));

app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

app.use('/api/payment', require('./routes/api/payment'));

app.use('/api/admin', require('./routes/api/admin'));

app.use('/api/subscriber', require('./routes/api/subscriber'));

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));