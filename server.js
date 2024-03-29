
const bodyParser = require("body-parser");
const express = require("express");
const monngoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");

const OnlineTakeAwayEndPoints = require('./src/routes/onlineTakeAway.routes');
const OnlineDeliveryEndPoints = require('./src/routes/onlineDelivery.routes');
const tableAPI = require("./src/routes/table.routes");
const TableCategoryAPI = require("./src/routes/tableCategory.routes.js");
const TableBookAPI = require("./src/routes/tableBook.routes.js");
const CategoryAPI = require('./src/routes/FoodCategory.route');
const FoodAPI = require('./src/routes/Food.route');
const RateAPI = require('./src/routes/rate.route');
const OfferAPI = require('./src/routes/Offer.route')

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// inject middleware
app.use(passport.initialize());
require('./src/middlewares/Validate.token')(passport);

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

app.use('/api/admin', require('./src/routes/Login_Route/Admin_Login.route'));
app.use('/api/admin', require('./src/routes/Protected_Route/Admin_Protected.route'));
app.use('/api/admin', require('./src/routes/Register_Routes/Admin_Register.route'));

app.use('/api/online-take-away', OnlineTakeAwayEndPoints());
app.use('/api/online-delivery', OnlineDeliveryEndPoints());
app.use('/api/table/', tableAPI());
app.use('/api/tableCategory/', TableCategoryAPI());
app.use('/api/tableBook/', TableBookAPI());
app.use('/api/category', CategoryAPI());
app.use('/api/food', FoodAPI());
app.use('/api/rate', RateAPI());
app.use('/api/offer',OfferAPI());

app.listen(PORT, () => {
  console.log("You are listening to port " + PORT);
});