const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "seseriusca@gmail.com",
      pass: "xvuhnurhumhvpypw"
    },
  });
  
  contactEmail.verify((error) => {
    error ? console.log(error) : console.log('not working');
  });

  router.post("/contact", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message; 

    const mail = {
      from: `${fname}` + `${lname}`,
      to: "seseriusca@gmail.com",
      subject: `${subject}`,
      html: `<p>Name: ${fname} ${lname}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });