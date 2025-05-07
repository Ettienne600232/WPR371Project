// routes/pageRoutes.js

const express = require("express");
const router = express.Router();

const aboutData = require("../data/about");
const eventsData = require("../data/events");

let contacts = [];

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
  contacts.push({ name, email, message });
  res.redirect("/thankyou");
});

router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});
module.exports = router;
