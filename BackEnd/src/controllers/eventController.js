const Event = require('../models/eventModel');
const User = require('../models/userModel');

const createEvent = async (req, res) => {
  try {
    const user = req.user;

    if (user.role !== 'promotor' && user.role !== 'admin') {
      return res.status(401).json({ message: 'No estás autorizado para agregar eventos. Contáctate con el administrador' });
    }

    const promotorID = user._id;
    const { name, date, time, place, description, images, status, tickets } = req.body;

    const newEvent = new Event({
      name,
      date: `${time ? new Date(date + 'T' + time) : date}`,
      place,
      description,
      image: images,
      status,
      promotorID,
      tickets,
    });

    const eventSaved = await newEvent.save();

    res.status(201).json({
      status: 200,
      message: 'Solictud de Evento Agregado con éxito',
      eventSaved
    });
  } catch (error) {
    console.log('Error al crear el evento: ', error);
    res.status(500).json({ message: "Error al crear el evento" })
    next(error);
  }
}

const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const eventDeleted = await Event.findByIdAndDelete(id)

    if (!eventDeleted) {
      return res.status(404).json({ message: "No se encontró el evento que se desea eliminar" });
    }

    res.status(200).json({
      message: 'Exitoso',
      status: 200,
      events: eventDeleted
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor al buscar eventos" });
  }
}

const getEventsByPromotorIdStatus = async (req, res) => {
  const promotorID = req.params.id;
  try {
    // Verificar si el promotor existe
    const promotor = await User.findById(promotorID);

    if (!promotor) {
      return res.status(404).json({ message: "Promotor no encontrado" });
    }

    const events = await Event.find({ promotorID, status: 'Por aprobar' }).populate('promotorID');

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No se encontraron eventos por aprobar para este promotor" });
    }

    res.status(200).json({
      message: 'Exitoso',
      status: 200,
      events: events
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor al buscar eventos" });
  }
}


const getEventsStatus = async (req, res) => {
  try {
    const events = await Event.find({ status: 'Por aprobar' }).populate('promotorID', 'name email');

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No se encontraron eventos por aprobar" })
    }

    res.status(200).json({
      message: 'Exitoso',
      status: 200,
      events
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor al buscar eventos" });
  }
}

module.exports = { createEvent, getEventsByPromotorIdStatus, getEventsStatus, deleteEvent };