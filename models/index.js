const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');

//Users to Posts

Users.hasMany(Posts,{
    foreingKey: 'user_id'
});

//Posts to Users

Posts.belongsTo(Users, {
    foreingKey: 'user_id'
});

//Users to Comments

Users.hasMany(Comments, {
    foreingKey: 'user_id'
});

//Comments to Users

Comments.belongsTo(Users, {
    foreingKey: 'user_id'
    
});

//Posts to Comments

Posts.hasMany(Comments, {
    foreingKey: 'post_id'
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id'
});

module.exports = {

    Users,
    Comments,
    Posts,
};