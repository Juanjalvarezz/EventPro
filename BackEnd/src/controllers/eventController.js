const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
  try {
    const { name, date, place, description, image, status, promotorToken, tickets } = req.body;

    const newEvent = new Event({
      name,
      date,
      place,
      description,
      image,
      status,
      promotorToken,
      tickets,
    });

    const eventSaved = await newEvent.save();

    res.status(201).json(eventSaved);
  } catch (error) {
    console.log('Error al crear el evento: ', error);
    res.status(500).json({ message: "Error al crear el evento" })
  }
}