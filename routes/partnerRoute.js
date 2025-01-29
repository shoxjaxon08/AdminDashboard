// routes/partnerRoute.js
const express = require('express');
const { createPartner, partnerLogin, getAllPartners, getPartnerById, updatePartner, deletePartner } = require('../controllers/partnerController');
const { authenticateJWT, authenticatePartner, authenticateAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Partner yaratish (authsiz)
router.post('/register', createPartner);

// Partner login qilish (authsiz)
router.post('/login', partnerLogin);

// Partnerni olish (partner rolini tekshirgan holda)
router.get('/profile', authenticateJWT, authenticateAdmin, (req, res) => {
  res.json({ message: "Partner profil", partner: req.user });
});

  // Barcha partnerlarni olish (admin rolini tekshirgan holda)
  router.get('/partners', authenticateJWT, authenticateAdmin, getAllPartners);

// Ma'lum bir partnerni olish (admin rolini tekshirgan holda)
router.get('/partners/:id', authenticateJWT, authenticateAdmin, getPartnerById);

// Partnerni yangilash (admin rolini tekshirgan holda)
router.put('/partners/:id', authenticateJWT, authenticateAdmin, updatePartner);

// Partnerni o‘chirish (admin rolini tekshirgan holda)
router.delete('/partners/:id', authenticateJWT, authenticateAdmin, deletePartner);

module.exports = router;
