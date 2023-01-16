const sequilize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, Datatypes } = require('sequilize');

class Users extends Model{

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Users.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
            
        },
        
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
);

module.exports = Users;