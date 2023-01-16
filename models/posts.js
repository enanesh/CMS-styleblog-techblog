const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequilize');

class Posts extends Model { };

Posts.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    
    },

    tittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
        
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
            
        }
    }
},

    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
        
    }
);

module.exports = Posts;