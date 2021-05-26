  
// import models
const User = require('./User');
const RightSwipe = require('./RightSwipe');

RightSwipe.belongsTo(User, {
    foreignKey: "userId"
});

RightSwipe.belongsTo(User, {
    foreignKey: "prospectId"
});

User.hasMany(RightSwipe, {
    foreignKey: "userId"
});

User.hasMany(RightSwipe, {
    foreignKey: "prospectId"
});

module.exports = {
    User,
    RightSwipe
  };

