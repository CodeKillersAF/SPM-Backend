const bodyParser = require("body-parser");
const express = require("express");
const monngoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const OnlineTakeAwayEndPoints = require('./src/routes/onlineTakeAway.routes')


const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

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

app.get("/", (req, res) => res.status(200).send("server up and running"));

app.use('/api/online-take-away', OnlineTakeAwayEndPoints());

app.listen(PORT, () => {
  console.log("You are listening to port " + PORT);
});