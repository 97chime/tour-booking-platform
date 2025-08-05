
import express from 'express';
import { registerUser, loginUser, refreshAccessToken } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/refresh', refreshAccessToken);

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

export default router;