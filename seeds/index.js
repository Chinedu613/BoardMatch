const seedUsers = require("./user-seeds");
const seedSwipes = require("./swipe-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n------DATABASE SYNCED-----\n");
    await seedUsers();
    console.log("\n------USERS SEEDED-----\n");
    await seedSwipes();
    console.log("\n------SWIPES SEEDED-----\n");
    process.exit(0);
};

seedAll();