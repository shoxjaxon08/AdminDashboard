const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const  Admin  = require('../models/adminModel');

// Adminni yaratish
const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await Admin.create({
      username,
      password: hashedPassword
    });
    res.status(201).json({ message: "Admin muvaffaqiyatli yaratildi", admin });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Admin login qilish
const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ where: { username } });

  if (!admin) {
    return res.status(400).json({ message: "Admin topilmadi" });
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    return res.status(400).json({ message: "Noto‘g‘ri parol" });
  }

  const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET);
  res.json({ message: "Kirish muvaffaqiyatli", token });
};

module.exports = { createAdmin, adminLogin };
