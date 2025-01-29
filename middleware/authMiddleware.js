// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// JWT tokenni tekshirish
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Authorization headerdan tokenni olish

  if (!token) {
    return res.status(403).json({ message: 'Token talab qilinadi' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token noto‘g‘ri' });
    }

    req.user = user; // Token orqali foydalanuvchini olish
    console.log(req.user); // Foydalanuvchi ma'lumotlarini konsolga chiqarish


    next(); // Keyingi middleware yoki route'ni chaqirish
  });
};

// Admin roli tekshiruvi
const authenticateAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin ruxsati kerak' });
  }
  next();
};

// Partner roli tekshiruvi
const authenticatePartner = (req, res, next) => {
  if (req.user.role !== 'partner') {
    return res.status(403).json({ message: 'Partner ruxsati kerak' });
  }
  next();
};

module.exports = { authenticateJWT, authenticateAdmin, authenticatePartner };
