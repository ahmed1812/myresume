require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/email', (req, res) => {
    console.log(req.body);
    nodemailer.createTestAccount((err, account) => {

        const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    
  `;
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.PASSWORD, // generated ethereal user
                pass: process.env.EMAIL  // generated ethereal password
            },
            tls:{
              rejectUnauthorized:false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '" my profoleo "<aLgandel86@gmail.com>', // sender address
            to: 'aLgandel19@gmail.com', // list of receivers


            subject: 'Node Contact Request web2', // Subject line
            text: req.body.message, // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // res.render('contact', {msg:'Email has been sent'});
        });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"))
});


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

