
import Booking from '../models/Booking.js';

export const placeBooking = async (req, res) => {
  const { tourId } = req.body;
  
  try {

    // Check for existing booking
    const existing = await Booking.findOne({
      user: req.user._id,
      tour: tourId,
    });

    if (existing) {
      return res.status(400).json({ message: 'You have already booked this tour.' });
    }
    
    // Proceed with booking
    const booking = new Booking({
      user: req.user._id,
      tour: tourId
    });

    await booking.save();
    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed' });
  }
};