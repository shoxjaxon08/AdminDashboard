const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db'); 
// const authRoutes = require('./routes/auth')
const dagovorRote = require('./routes/dagovorRoute')
const adminRoutes = require('./routes/adminRoute')
const cors = require('cors')
const partnerRoute = require('./routes/partnerRoute')

const app = express();
app.use(bodyParser.json());
app.use(cors());
// console.log(authRoutes);  // Router obyektini chiqaradi
console.log(adminRoutes);  // Router obyektini chiqaradi
console.log(partnerRoute);  // Router obyektini chiqaradi

// app.use('/api/auth',authRoutes)
app.use('/api', dagovorRote)
app.use('/api/admin', adminRoutes);
app.use('/api/partner', partnerRoute);

const PORT = process.env.PORT || 4000;

// Express serverini ishga tushurish
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`);
});
