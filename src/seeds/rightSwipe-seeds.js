
const { RightSwipe } = require("../models");

const rightSwipeData = [{
        userId: 1,
        prospectId: 2,
        distance: 2489.3,
        isActive: true,
        message: "hey Kyle, want to get a d&d group going?"
    }, {
        userId: 1,
        prospectId: 3,
        distance: 199.4,
        isActive: true,
        message: "hi Chin, I'm looking for some new d&d players for a group, you interested?"
    }, {
        userId: 1,
        prospectId: 4,
        distance: 285,
        isActive: true,
        message: "Hi Marco"
    }, {
        userId: 2,
        prospectId: 1,
        distance: 2489.3,
        isActive: true,
        message: "sure, sounds good"
    }, {
        userId: 2,
        prospectId: 3,
        distance: 2353.8,
        isActive: true,
        message: "Hey Chin, whats up? Any interest in joining a new group?"
    }, {
        userId: 2,
        prospectId: 5,
        distance: 1540.8,
        isActive: true,
        message: "Whats up?"
    }, {
        userId: 3,
        prospectId: 4,
        distance: 147.7,
        isActive: true,
        message: ""
    }, {
        userId: 3,
        prospectId: 5,
        distance: 849.5,
        isActive: true,
        message: "Alex, are you avalible to start a new game in 6 weeks or so"
    }, {
        userId: 4,
        prospectId: 1,
        distance: 285,
        isActive: true,
        message: "Hey Mike, any chance your group is looking for a DM? I have some experience with that"
    }, {
        userId: 4,
        prospectId: 5,
        distance: 703.4,
        isActive: true,
        message: "hey man, looking to start a new game?"
    }, {
        userId: 5,
        prospectId: 3,
        distance: 849.5,
        isActive: true,
        message: "Should be, yeah"
    }, {
        userId: 5,
        prospectId: 4,
        distance: 703.4,
        isActive: true,
        message: "bit of a commute, but sure. Maybe we could play over zoom or something"
    }, {
        userId: 6,
        prospectId: 8,
        distance: 1251.2,
        isActive: true,
        message: ""
    }, {
        userId: 7,
        prospectId: 6,
        distance: 983.2,
        isActive: true,
        message: "hey"
    }, {
        userId: 7,
        prospectId: 8,
        distance: 1249.4,
        isActive: true,
        message: ""
    }, {
        userId: 8,
        prospectId: 7,
        distance: 1249.4,
        isActive: true,
        message: "Whats good?"
    }
]

const seedRightSwipes = () => RightSwipe.bulkCreate(rightSwipeData);

module.exports = seedRightSwipes;