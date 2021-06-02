  
// import models
const User = require('.//User');
const Swipe = require('./Swipe');

Swipe.belongsTo(User, {
    foreignKey: "userId"
});

// Swipe.belongsTo(User, {
//     foreignKey: "prospectId"
// });

User.hasMany(Swipe, {
    foreignKey: "userId"
});

// User.hasMany(Swipe, {
//     foreignKey: "prospectId"
// });

module.exports = {
    User,
    Swipe
  };

