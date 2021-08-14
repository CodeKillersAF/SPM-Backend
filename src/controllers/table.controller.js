const Table = require("../models/table.model");

//add table
const createTable = async (req, res) => {
  try {
    const table = new Table(req.body);
    await table.save();
    res.status(200).json(table);
  } catch (err) {
    res.status(400).json(err);
  }
};

//remove table
const removeTable = async (req, res) => {
  try {
    if (req.params.id) {
      await Table.findByIdAndRemove(req.params.id).then((data) => {
        res.status(200).send({ data: data });
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  removeTable,
  createTable,
};
