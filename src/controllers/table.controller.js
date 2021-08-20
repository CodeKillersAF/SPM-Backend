
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

//get all tables
const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find({});
    res.status(200).json(tables);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get table by id
const getTableById = async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    res.status(200).json(table);
  } catch (err) {
    res.status(500).send(err);
  }
};

//update table
const updateTable = async (req, res) => {
  try {
    if (req.params.id) {
      const table = await Table.findById(req.params.id);
      if (table) {
        const updatedUser = await Table.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "Table not found" });
      }
    } else {
      res.status(400).json({ message: "Table id not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const updateTableStatus = async (req, res) => {
  try {
    if (req.params.id) {
      const table = await Table.findById(req.params.id);
      if (table) {
        const updatedUser = await Table.findByIdAndUpdate(
          req.params.id,
          { $set: req.body.isAvaible },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "Table not found" });
      }
    } else {
      res.status(400).json({ message: "Table id not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createTable,
  removeTable,
  getAllTables,
  updateTable,
  getTableById,
  updateTableStatus
};
