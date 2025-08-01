
import express from 'express';
import TourPackage from '../models/TourPackage.js';

const router = express.Router();

// Public route - Get all packages
router.get('/', async (req, res) => {
  try {
    const tours = await TourPackage.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Public route - Get a single package by ID
router.get('/:id', async (req, res) => {
  try {
    const tour = await TourPackage.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: 'Tour not found' });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tour' });
  }
});

// Admin route - Create new package
router.post('/', async (req, res) => {
  try {
    const tours = new TourPackage(req.body);
    await tours.save();
    res.status(201).json(tours);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
