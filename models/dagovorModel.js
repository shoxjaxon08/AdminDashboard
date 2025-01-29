    const {DataTypes} = require("sequelize")
    const sequelize = require("../config/db")

    const Dagovor = sequelize.define("Dagovor",{
        id:{
            type:DataTypes.STRING,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true,
        },
        sales_point: {
            type:DataTypes.STRING,
            defaultValue:"CHEKSIZ NASIYA"
        },
        first_name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        last_name :{
            type:DataTypes.STRING,
            allowNull:false
        },
        middle_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        work_place:{
            type:DataTypes.STRING,
            allowNull:false
        },
        qoshimcha_phone:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        product_info:{
            type:DataTypes.STRING,
            allowNull:false
        },
        kontact_phone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password_id:{
            type:DataTypes.STRING,
            allowNull:false
        },
        jshr:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nomer_dogavora_scheta :{
            type:DataTypes.STRING,
            allowNull:false,
        defaultValue: "+998883640108"
        },
        payment_deadline:{
            type:DataTypes.STRING,
            allowNull:false
        },  
        payment_start_month:{
            type:DataTypes.STRING,
            allowNull:false
        }


    }, {
        tableName: 'Dagovors',
        timestamps: false  // Timestampsni o'chirish
    });


    module.exports = Dagovor