import express from 'express';
import { placeBooking, myBookings } from '../controllers/bookingController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Create new booking
router.post('/', requireAuth, placeBooking);

router.get('/mine', requireAuth, myBookings);

export default router;
