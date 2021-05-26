const seedUsers = require('./user-seeds');
const seedRightSwipes = require('./rightSwipe-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedRightSwipes();
  console.log('\n----- RIGHTSWIPES SEEDED -----\n');
  
  process.exit(0);
};

seedAll();