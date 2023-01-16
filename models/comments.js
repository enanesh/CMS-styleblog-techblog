const sequilize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Comments extends Model { };

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
            
        },
        

    }
)