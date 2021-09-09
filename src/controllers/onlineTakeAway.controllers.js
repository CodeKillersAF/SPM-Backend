const OnlineTakeAway = require("../models/onlineTakeAway.models");

//Set Online takeaway delivery order
const createOnlineTakeAwayOrder = async (req, res) => {
  try {
    const onlineTakeAwayOrder = new OnlineTakeAway(req.body);
    await onlineTakeAwayOrder
      .save()
      .then((data) => {
        res.status(201).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//Detete the record
const deleteOneOnlineTakeAwayOrder = async (req, res) => {
  try {
    if (req.params.id) {
      await OnlineTakeAway.findByIdAndDelete(req.params.id)
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    } else {
      res.status(400).send({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//Update online take away order
const updateOnelineTakeAwayOrder = async(req,res) => {
  try {
    if(req.params.id){

      await OnlineTakeAway.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        telephone: req.body.telephone,
        total_price: req.body.total_price,
        $addToSet:{

          items:[req.body.items.toString()]}
      })
      .then((data) => {
        res.status(200).send({data :data});
      })
      .catch((error) => {
        res.status(500).send({error: error.message});
      })
    } else {
      res.status(400).send({ message: "Bad request" })
    }
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

//Get one order details
const getOneTakeAwayOrderDetail = async (req, res) => {
  try {
    if (req.params.id) {
      await OnlineTakeAway.findById(req.params.id)
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    } else {
      res.status(400).send({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//Get all online takeaway orders
const getAllTakeAwayOrders = async (req,res) => {
  try{
    await OnlineTakeAway.find({})
    .then((data) => {
      res.status(200).send({data :data});
    })
    .catch((error) => {
      res.status(500).send({error: error.message});
    })
  }catch(error) {
    res.status(500).send({error: error.message})
  }
}

//get all completed orders
const getAllCompletedTakeAwayOrders = async (req,res) => {
  try{
    await OnlineTakeAway.find({is_completed: true})
    .then((data) => {
      res.status(200).send({data: data});
    })
    .catch((error) => {
      res.status(500).send({error : error.message})
    })
  }catch(error){
    res.status(500).send({error: error.message})
  }
};


//get all incompleted orders
const getAllInCompletedTakeAwayOrders = async (req,res) => {
  try{
    await OnlineTakeAway.find({is_completed: false})
    .then((data) => {
      res.status(200).send({data: data});
    })
    .catch((error) => {
      res.status(500).send({error : error.message})
    })
  }catch(error) {
    res.status(500).send({error: error.message})
  }
};



module.exports = {
  createOnlineTakeAwayOrder,
  deleteOneOnlineTakeAwayOrder,
  getOneTakeAwayOrderDetail,
  getAllTakeAwayOrders,
  getAllCompletedTakeAwayOrders,
  getAllInCompletedTakeAwayOrders,
  updateOnelineTakeAwayOrder
};
