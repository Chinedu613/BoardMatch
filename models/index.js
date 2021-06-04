  
// import models
const User = require('.//User');
const Swipe = require('./Swipe');
const MatchTransaction = require("./User");
const MatchRecord = require("./Swipe");

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
    Swipe,
    MatchTransaction,
    MatchRecord
  };

