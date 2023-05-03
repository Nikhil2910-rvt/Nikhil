const Contact = require("../models/Contact");
const router = require("express").Router();

// Submit contact form
router.post("/", async (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
