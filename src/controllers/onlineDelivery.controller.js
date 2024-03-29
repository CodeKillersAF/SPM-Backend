const OnlineDelivery = require("../models/onlineDelivery.models");
/**
 * This function is using to create deilvery order
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @returns void
 */
const createOnlieneDeliveryOrder = async (req, res) => {
  try {
    const onlineDeliveryOrder = new OnlineDelivery(req.body);
    await onlineDeliveryOrder
      .save()
      .then((data) => {
        res.status(201).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ msg: "lalal", error: error.message });
      });
  } catch (error) {
    res.status(500).send({ msg: "lolol", error: error.message });
  }
};

/**
 * This function is using to get all delivery orders
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getAllDeliveryOrders = async (req, res) => {
  await OnlineDelivery.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};


/**
 * This function is using to delete one delivery order
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteOneOnlineDeliveryOrder = async (req, res) => {
  try {
    if (req.params.id) {
      await OnlineDelivery.findByIdAndDelete(req.params.id)
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    } else {
      res.status(400).send({ message: "Bad Request" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

/**
 * This function is using to update the status of delivery order
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getAllInCompletedDeliveryOrders = async (req, res) => {
  try {
    await OnlineDelivery.find({ is_completed: false })
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

/**
 * This function is using to get all the completed delivery orders
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getAllCompletedDeliveryOrders = async (req, res) => {
  try {
    await OnlineDelivery.find({ is_completed: true })
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const setDeliveryOrderAsCompleted = async (req, res) => {
  try {
    if (req.params.id) {
      await OnlineDelivery.updateOne(
        { _id: req.params.id },
        { is_completed: true }
      )
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteCompletedDeliveryOrder = async (req, res) => {
  try {
    await OnlineDelivery.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOnlieneDeliveryOrder,
  getAllDeliveryOrders,
  deleteOneOnlineDeliveryOrder,
  getAllInCompletedDeliveryOrders,
  getAllCompletedDeliveryOrders,
  setDeliveryOrderAsCompleted,
  deleteCompletedDeliveryOrder,
};
