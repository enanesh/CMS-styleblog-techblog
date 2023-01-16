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
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10],
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        //add post id need to create post model firts
     


        

    },
    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    },

);

module.exports = Comments;