const { User } = require("../models");

const userData = [
    {
        userName: "mikeR",
        password: "123",
        lat: 40.745255,
        lon: -74.034775,
        favoriteGame: "Dungeons and Dragons",
        skillLevel: 1        
    },
    {
        userName: "kyleB",
        password: "123",
        lat: 34.155834,
        lon: -119.202789,
        favoriteGame: "Dungeons and Dragons",
        skillLevel: 2
    },
    {
        userName: "chinC",
        password: "123",
        lat: 42.933334,
        lon: -76.566666,
        favoriteGame: "Dungeons and Dragons",
        skillLevel: 4
    },
    {
        userName: "marcoE",
        password: "123",
        lat: 42.095554,
        lon: -79.238609,
        favoriteGame: "Dungeons and Dragons",
        skillLevel: 3
    },
    {
        userName: "alexC",
        password: "123",
        lat: 38.846668,
        lon: -91.948059,
        favoriteGame: "Dungeons and Dragons",
        skillLevel: 3
    },
    {
        userName: "andreS",
        password: "123",
        lat: 41.392502,
        lon: -81.534447,
        favoriteGame: "Settlers of Catan",
        skillLevel: 2
    },
    {
        userName: "andrewH",
        password: "123",
        lat: 27.192223,
        lon: -80.243057,
        favoriteGame: "Settlers of Catan",
        skillLevel: 4
    },
    {
        userName: "peteR",
        password: "123",
        lat: 31.442778,
        lon: -100.450279,
        favoriteGame: "Settlers of Catan",
        skillLevel: 5
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;