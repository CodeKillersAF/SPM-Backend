const bodyParser = require("body-parser");
const express = require("express");
const monngoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");


const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// inject middleware
app.use(passport.initialize());
require('./Auth-src/middlewares/Validate.token')(passport);

const PORT = process.env.PORT || 8000;

const MONGODB_URI = process.env.MONGODB_URI;

monngoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  (error) => {
    if (error) {
      console.log("Database connecting error", error);
    }
  };

monngoose.connection.once("open", () => {
  console.log("Database connected");
});

app.use('/api/admin', require('./Auth-src/routes/Login_Route/Admin_Login.route'));
app.use('/api/admin', require('./Auth-src/routes/Protected_Route/Admin_Protected.route'));
app.use('/api/admin', require('./Auth-src/routes/Register_Routes/Admin_Register.route'));

app.listen(PORT, () => {
  console.log("You are listening to port " + PORT);
});