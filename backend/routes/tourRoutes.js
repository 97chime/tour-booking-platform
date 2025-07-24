
import express from 'express';
import TourPackage from '../models/TourPackage.js';

const router = express.Router();

// Public route - Get all packages
router.get('/', async (req, res) => {
  try {
    const packages = await TourPackage.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Create new package (test via Postman first)
router.post('/', async (req, res) => {
  try {
    const pkg = new TourPackage(req.body);
    await pkg.save();
    res.status(201).json(pkg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
