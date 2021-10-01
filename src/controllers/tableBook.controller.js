const TableBook = require('../models/tableBook.model');


// add a new tableBook
const addTableBook = (req, res) => {

    // Create a new tableBook
    const tableBook = new TableBook(req.body);

    // Save tableBook in the database
    tableBook.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tableBook."
            });
        });
}

// Retrieve and return all tableBooks from the database.
const findAllTableBooks = (req, res) => {
    TableBook.find()
        .then(tableBooks => {
            res.send(tableBooks);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tableBooks."
            });
        });
}

// Find a single tableBook with a tableBookId
const findOneTableBook = (req, res) => {
    TableBook.findById(req.params.tableBookId)
        .then(tableBook => {
            if (!tableBook) {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.tableBookId
                });
            }
            res.send(tableBook);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.tableBookId
                });
            }
            return res.status(500).send({
                message: "Error retrieving tableBook with id " + req.params.tableBookId
            });
        });
}

// Update a tableBook identified by the tableBookId in the request
const updateTableBook = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "tableBook content can not be empty"
        });
    }

    // Find tableBook and update it with the request body
    TableBook.findByIdAndUpdate(req.params.id, 
        { $set: req.body },
        { new: true })
        .then(tableBook => {
            if (!tableBook) {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.tableBookId
                });
            }
            res.send(tableBook);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.tableBookId
                });
            }
            return res.status(500).send({
                message: "Error updating tableBook with id " + req.params.tableBookId
            });
        });
}

// Delete a tableBook with the specified tableBookId in the request
const deleteTableBook = (req, res) => {
    TableBook.findByIdAndRemove(req.params.id)
        .then(tableBook => {
            if (!tableBook) {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.id
                });
            }
            res.send({ message: "tableBook deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "tableBook not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete tableBook with id " + req.params.id
            });
        });
}

module.exports = {
    addTableBook,
    findAllTableBooks,
    findOneTableBook,
    updateTableBook,
    deleteTableBook
}

