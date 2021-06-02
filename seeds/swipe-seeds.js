const { Swipe } = require("../models");

const swipeData = [
    {
        userId: 1,
        prospectId: 2,
        distance: 193.26,
        message: "Hey kyle, want to start a d&d group?",
        status: "matched",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 3,
        distance: 59.48,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 4,
        distance: 194.84,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 5,
        distance: 60.69,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 9,
        distance: 153.45,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 3,
        distance: 231.84,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 4,
        distance: 6.14,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 5,
        distance: 187.01,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 31,
        distance: 270.78,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 34,
        distance: 837.89,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 9,
        distance: 83.69,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 31,
        prospectId: 2,
        distance: 270.78,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 34,
        prospectId: 2,
        distance: 837.89,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 9,
        prospectId: 1,
        distance: 153.45,
        message: "",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 2,
        prospectId: 1,
        distance: 193.26,
        message: "Yeah, sounds good",
        status: "matched",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 54,
        distance: 21.69,
        message: "NULL",
        status: "invited",
        game: "Dungeons and Dragons"
    }, {
        userId: 23,
        prospectId: 1,
        distance: 39.78,
        message: "NULL",
        status: "matched",
        game: "Dungeons and Dragons"
    }, {
        userId: 61,
        prospectId: 1,
        distance: 58.82,
        message: "NULL",
        status: "declined",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 23,
        distance: 39.78,
        message: "",
        status: "matched",
        game: "Dungeons and Dragons"
    }, {
        userId: 1,
        prospectId: 61,
        distance: 58.82,
        message: "",
        status: "declined",
        game: "Dungeons and Dragons"
    }
];

const seedSwipes = () => Swipe.bulkCreate(swipeData);

module.exports = seedSwipes;