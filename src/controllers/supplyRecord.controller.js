const SupplyRecord = require('../models/supplyRecord.model');
const nodemailer = require('nodemailer');

const createSupplyRecord = async (req, res) => {
    if (req.body) {
        const supplyRecord = new SupplyRecord(req.body);
        await supplyRecord.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

const getAllSupplyRecord = async (req, res) => {
    await SupplyRecord.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const sendMailUser = async (req,res) => {
    try {
           // console.log(data.email);
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                  user: 'vishwabsachin@gmail.com',
                  pass: 'apihamadenama'
                }
              });
              var mailOptions = {
                from: 'Hashenhshamika@gmail.com',
                to: 'kawsinote@gmail.com',
                subject: 'Your Bill Copy',
                text: 'This is your bill copy for the supplly'
              };
  
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
    } catch (error) {
        res.send({error: error.message});
    }
  }



module.exports = {
    createSupplyRecord, getAllSupplyRecord, sendMailUser
}