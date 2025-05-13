const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const aboutData = require("../data/about");
const eventsData = require("../data/events");

const contactFilePath = path.join(__dirname, "../data/contact.json");

let contacts = [];
if (fs.existsSync(contactFilePath)) {
  const data = fs.readFileSync(contactFilePath, "utf-8");
  contacts = JSON.parse(data);
}

router.get("/", (req, res) => {
  res.render("pages/home", { events: eventsData });
});

router.get("/about", (req, res) => {
  res.render("pages/about", { team: aboutData });
});

router.get("/events", (req, res) => {
  res.render("pages/events", { events: eventsData });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  const id = Date.now();
  const newContact = { id, name, email, message };
  contacts.push(newContact);

  fs.writeFile(contactFilePath, JSON.stringify(contacts, null, 2), (err) => {
    if (err) {
      console.error("Error saving contact:", err);
      return res.status(500).send("Internal Server Error.");
    }
    console.log("Saved");
    res.redirect("/thankyou");
  });
});

router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});

module.exports = router;
