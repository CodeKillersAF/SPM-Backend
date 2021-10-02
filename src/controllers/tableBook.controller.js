const TableBook = require("../models/tableBook.model");
const nodemailer = require("nodemailer");

// add a new tableBook
const addTableBook = (req, res) => {
  // Create a new tableBook
  const tableBook = new TableBook(req.body);

  // Save tableBook in the database
  tableBook
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tableBook.",
      });
    });
};

// Retrieve and return all tableBooks from the database.
const findAllTableBooks = (req, res) => {
  TableBook.find()
    .populate("tableId", "name")
    .then((tableBooks) => {
      res.send(tableBooks);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tableBooks.",
      });
    });
};

// Find a single tableBook with a tableBookId
const findOneTableBook = (req, res) => {
  TableBook.findById(req.params.tableBookId)
    .then((tableBook) => {
      if (!tableBook) {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.tableBookId,
        });
      }
      res.send(tableBook);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.tableBookId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving tableBook with id " + req.params.tableBookId,
      });
    });
};

// Update a tableBook identified by the tableBookId in the request
const updateTableBook = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "tableBook content can not be empty",
    });
  }

  // Find tableBook and update it with the request body
  TableBook.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((tableBook) => {
      if (!tableBook) {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.tableBookId,
        });
      }
      res.send(tableBook);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.tableBookId,
        });
      }
      return res.status(500).send({
        message: "Error updating tableBook with id " + req.params.tableBookId,
      });
    });
};

// Delete a tableBook with the specified tableBookId in the request
const deleteTableBook = (req, res) => {
  TableBook.findByIdAndRemove(req.params.id)
    .then((tableBook) => {
      if (!tableBook) {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.id,
        });
      }
      res.send({ message: "tableBook deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete tableBook with id " + req.params.id,
      });
    });
};
//get most reserved tableId
const getMostReservatedTableBook = (req, res) => {
  TableBook.find({})
    .sort({ reserved: -1 })
    .limit(1)
    .then((tableBook) => {
      if (!tableBook) {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.id,
        });
      }
      res.send(tableBook);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "tableBook not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving tableBook with id " + req.params.id,
      });
    });
};
const sendEmail = async (req, res) => {
  try {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "oghandesl@gmail.com",
        pass: "@tdkasmith123789456",
      },
    });
    
    TableBook.findById(req.body._id).populate("tableId","name").then((tableBook) => {
     const table = tableBook.tableId.name;
      var mailOptions = {
        from: "hashenhshamika@gmail.com",
        to: req.body.email,
        subject: "Status about your Table Booking",
        text:
          "Hi " +
          req.body.customerName +
          ",\n\n" +
          "Your table booking accepted." +
          "\n\n" +
          "Table : " +
          table + "\n"+
          "Date : " +
          req.body.date +
          "\n" +
          "Time : " +
          req.body.time +
          "\n\n" +
          "Thank you for using our service.",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  addTableBook,
  findAllTableBooks,
  findOneTableBook,
  updateTableBook,
  deleteTableBook,
  getMostReservatedTableBook,
  sendEmail,
};
