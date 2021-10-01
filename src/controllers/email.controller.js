const nodemailer = require('nodemailer')

const emailSender = async (req,res) => {

    try {
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
              user: 'hashenhshamika@gmail.com',
              pass: 'himidiriudasana'
            }
          });

          var mailOptions = {
            from: 'hashenhshamika@gmail.com',
            to: req.body.to,
            subject: 'SPM',
            text: 'total price : ' + req.body.total_price
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
  emailSender
}
