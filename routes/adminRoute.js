// routes/adminRoute.js
const express = require('express');
const { createAdmin, adminLogin } = require('../controllers/adminController');
const { authenticateJWT, authenticateAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin yaratish (authsiz)
router.post('/register', createAdmin);

// Admin login qilish (authsiz)
router.post('/login', adminLogin);

// Adminni olish (admin rolini tekshirgan holda)
router.get('/profile', authenticateJWT, authenticateAdmin, (req, res) => {
  res.json({ message: "Admin profil", admin: req.user });
});

module.exports = router;
