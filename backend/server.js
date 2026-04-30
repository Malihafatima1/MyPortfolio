require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const Contact = require("./models/Contact");

const app = express();
app.use(cors({
  origin:"https://frontend-omega-silk-37.vercel.app"
}));
app.use(bodyParser.json());



// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

console.log("SID:", process.env.TWILIO_SID);
console.log("AUTH:", process.env.TWILIO_AUTH);

// ✅ Twilio
const client = require("twilio")(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

// ✅ Nodemailer
/*const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
*/
app.get("/", (req, res) => {
  res.send("Backend working");
});

// ✅ MAIN API
app.post("/send-sms", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // 1️⃣ Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Send SMS
    await client.messages.create({
      body: `New Message:
  Name: ${name}
  Email: ${email}
  Message: ${message}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.MY_PHONE,
    });

    // 3️⃣ Send Email
    /*await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    */

    res.send("Saved + SMS sent");
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ Get all messages (Admin)
app.get("/messages", async (req, res) => {
  const messages = await Contact.find().sort({ date: -1 });
  res.json(messages);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
