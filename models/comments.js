const sequilize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Comments extends Model { };

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        comment_text: {
            type: DataTypes.TEXT('medium'),
            allowNull: false,
           
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
         
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            referemces: {
                model: 'posts',
                key:'id'
            }
            
        }
     


        

    },
    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    },

);

module.exports = Comments;