const bcrypt = require('bcryptjs');
const Partner = require('../models/partnerModel'); // Partner modelini import qilish
const jwt = require("jsonwebtoken");
// const JWT_SECRET = require("JWT_SECRET")

// Partner yaratish
const createPartner = async (req, res) => {
  const { partner_name, username, password,role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
 
  try {
    const partner = await Partner.create({
      partner_name,
      username,
      password: hashedPassword,
      role:role || 'partner'
    });
    console.log("Partner role: ", partner.role); 

    res.status(201).json({ message: "Partner muvaffaqiyatli yaratildi", partner });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};
// Partner login qilish
const partnerLogin = async (req, res) => {
  const { username, password } = req.body;
  const partner = await Partner.findOne({ where: { username } });

  if (!partner) {
    return res.status(400).json({ message: "Partner topilmadi" });
  }

  const match = await bcrypt.compare(password, partner.password);

  if (!match) {
    return res.status(400).json({ message: "Noto‘g‘ri parol" });
  }
 // Partnerning roli konsolga chiqarish

  // Token yaratishda role ni ham yuborish
  const token = jwt.sign(
    { id: partner.id, username: partner.username, role: partner.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
    
  );

  res.json({ message: "Kirish muvaffaqiyatli", token });
};


// Partnerlarni olish
const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.findAll();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Partnerni olish
const getPartnerById = async (req, res) => {
  const { id } = req.params;

  try {
    const partner = await Partner.findByPk(id);
    if (!partner) {
      return res.status(404).json({ message: "Partner topilmadi" });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Partnerni yangilash
const updatePartner = async (req, res) => {
  const { id } = req.params;
  const { partner_name, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const partner = await Partner.findByPk(id);
    if (!partner) {
      return res.status(404).json({ message: "Partner topilmadi" });
    }

    partner.partner_name = partner_name || partner.partner_name;
    partner.username = username || partner.username;
    partner.password = hashedPassword || partner.password;

    await partner.save();
    res.status(200).json({ message: "Partner muvaffaqiyatli yangilandi", partner });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Partnerni o‘chirish
const deletePartner = async (req, res) => {
  const { id } = req.params;

  try {
    const partner = await Partner.findByPk(id);
    if (!partner) {
      return res.status(404).json({ message: "Partner topilmadi" });
    }

    await partner.destroy();
    res.status(200).json({ message: "Partner muvaffaqiyatli o‘chirildi" });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

module.exports = { createPartner, partnerLogin, getAllPartners, getPartnerById, updatePartner, deletePartner };
