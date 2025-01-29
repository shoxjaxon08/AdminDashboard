require('dotenv').config();  // .env faylini o'qish

const { Sequelize } = require('sequelize');



// .env faylidan ma'lumotlarni olish
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    
    host: process.env.DB_HOST,
    dialect: 'mysql', // mysql2 ni ishlatish
  }
);

// MySQL bilan ulanishni tekshirish
sequelize
  .authenticate()
  .then(() => console.log('Mysql ulanishi muvaffaqiyatli!'))
  .catch((err) => console.log('Mysql ulanishi xatolik:', err));

module.exports = sequelize;


