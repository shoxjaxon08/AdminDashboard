const { json } = require("body-parser");
const Dagovor = require("../models/dagovorModel");
const {sequelize} = require('../config/db')


exports.createDagovor = async  (req,res) => {
    try {
        const dagovor = await Dagovor.create(req.body);
        return res.status(201).json({message:"Shartnoma muvafaqiyatli saaqlandi",id:dagovor.id})
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: 'Ma\'lumotni saqlashda xatolik' });
    }
}

exports.getAlldagovor = async (req,res) => {
    try {
        const dagovors = await Dagovor.findAll();
          return res.status(200).json(dagovors)
    }
    catch (error) {
        res.status(500).json({ error: 'Ma\'lumotni olishda xatolik' });

    }
}


exports.getDagovorById = async (req,res) => {
    try {
        const dagovor = await Dagovor.findByPk(req.params.id);
        if(!dagovor){
            return res.status(404).json({message:"Shartnoma Topilmadi"})
        }else{
            return res.status(200).json(dagovor);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ma\'lumotni olishda xatolik' });
        
    }

}

exports.deleteDagovor = async (req, res) => {
    try {
        const dagovor = await Dagovor.findByPk(req.params.id);
        if (!dagovor) {
            return res.status(404).json({ message: 'Shartnoma topilmadi' });
        }

        // Shartnomani o'chirish
        await dagovor.destroy();

        return res.status(200).json({ message: 'Shartnoma muvaffaqiyatli o\'chirildi' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ma\'lumotni o\'chirishda xatolik yuz berdi' });
    }
};

