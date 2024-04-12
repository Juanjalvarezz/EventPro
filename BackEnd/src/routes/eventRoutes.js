const router = require('express').Router();
const { verifyToken } = require('../middlewares/authMiddleware');
const { createEvent, getAllEvents, getEventsByPromotorIdStatus, getEventsStatus, deleteEvent } = require('../controllers/eventController');

router.post('/', verifyToken, createEvent);
router.get('/', verifyToken, getAllEvents);
router.get('/status/:filter', verifyToken, getEventsStatus);
router.get('/:id', verifyToken, getEventsByPromotorIdStatus);
router.delete('/delete/:id', verifyToken, deleteEvent);

module.exports = router;