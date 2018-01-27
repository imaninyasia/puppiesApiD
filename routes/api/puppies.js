const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');

// handle all the routes

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// Implement POST to adopt a puppy
router.post('/', adoptPuppy, (req, res) => {
  res.send('Successful Post');
});

// Implement PUT to like a puppy
router.put('/like/:id', likePuppy, (req, res) => {
  res.send('Successful Put');
});

// Implement DELETE to abandon a puppy :(
router.delete('/delete/:id', abandonPuppy, (req, res) => {
  res.send('Successful Post');
});

module.exports = router;
