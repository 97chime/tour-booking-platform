import express from 'express';
import { placeBooking } from '../controllers/bookingController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Create new booking
router.post('/', requireAuth, placeBooking);

export default router;
