const TableCategory = require("../models/tableCategory.model");

//add table category
const addTableCategory = async (req, res) => {
  try {
    let tableCategory = new TableCategory(req.body);
    await tableCategory.save();
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};
//get table category
const getTableCategory = async (req, res) => {
  try {
    let tableCategory = await TableCategory.findOne({ _id: req.params.id });
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};

//get all table category
const getAllTableCategory = async (req, res) => {
  try {
    let tableCategory = await TableCategory.find({});
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};

//update table category
const updateTableCategory = async (req, res) => {
  try {
    let tableCategory = await TableCategory.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};
//update movies
const updateMovies = async (req, res) => {
  try {
    let tableCategory = await TableCategory.findOneAndUpdate(
      { _id: req.params.id },
      { $push: {movies:req.body.movies}},
      { new: true }
    );
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};

//remove table category
const removeTableCategory = async (req, res) => {
  try {
    let tableCategory = await TableCategory.findOneAndRemove({
      _id: req.params.id,
    });
    res.json(tableCategory);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addTableCategory,
  getTableCategory,
  getAllTableCategory,
  updateTableCategory,
  removeTableCategory,
  updateMovies
};
