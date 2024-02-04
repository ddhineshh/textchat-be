const router = require('express').Router();
const Room = require('../models/Room');

router.get('/rooms', async (req, res) => {
  
  try {
    const rooms = await Room.find().select('name');
    const roomNames = rooms.map(room => room.name);
    res.json(roomNames);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

//create room
router.post('/rooms', async (req, res) => {
    try {
      const { name } = req.body;
      const room = await Room.create({ name });
      res.json(room);
    } catch (e) {
      console.log(e);
      res.status(400).send();
    }
  });

  module.exports = router;