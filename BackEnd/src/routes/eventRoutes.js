const router = require('express').Router();
const { verifyToken } = require('../middlewares/authMiddleware');
const { createEvent, getEventsByPromotorIdStatus, getEventsStatus } = require('../controllers/eventController');

router.post('/', verifyToken, createEvent);
router.get('/:id', verifyToken, getEventsByPromotorIdStatus);
router.get('/status', verifyToken, getEventsStatus);

module.exports = router;