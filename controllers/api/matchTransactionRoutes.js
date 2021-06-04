const router = require("express").Router();
const { Swipe, User, MatchTransaction, MatchRecord } = require("../../models");

//gets match dtos to display to user
router.get("/", async (req, res) => {  
  try {
    let userId = parseInt(req.query.userId);
    let transactions = [];
    let allSwipes = await Swipe.findAll({raw: true});
    let allUsers = await User.findAll({raw: true});
    const clientUser = await User.findByPk(userId, {
    
    }).then(function(clientUser) {
      if (clientUser !== undefined) {
        const matchUsers = getMatchSessionUsers(clientUser, allUsers, allSwipes);
        //console.log(matchUsers);
        matchUsers.forEach(matchUser => {
          //find invite swipe
          let inviteSwipe = allSwipes.find(sp => sp.userId === matchUser.id && sp.status === "invited");
          if (inviteSwipe !== undefined) {
            //set dto fields for invite response update
            let mTransaction = createMatchTransaction(clientUser, matchUser, "invited", inviteSwipe);
            mTransaction.distance = inviteSwipe.distance !== undefined ? haversineDistance(clientUser.lat, clientUser.lon, matchUser.lat, matchUser.lon) : swipe.distance;
            transactions.push(mTransaction);
          } else {
            //set dto fields as 'open' match
            let undefinedSwp = undefined;
            let mTransaction = createMatchTransaction(clientUser, matchUser, "open", undefinedSwp);
            mTransaction.distance = haversineDistance(clientUser.lat, clientUser.lon, matchUser.lat, matchUser.lon);            
            transactions.push(mTransaction);
          }

        });

        res.status(200).json(transactions);

      } else {
        res.status(400).json({ message: `couldn't find a client user with id ${userId}` })
      }
    });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//finds old matches for passed in clientUser id (url path, not q string)
router.get("/:id", async (req, res) => {
  let matchRecords = [];
  let matchInviteSwipes = [];
  let userId = parseInt(req.params.id);
  //console.log(userId);
  try {
    let allSwipes = await Swipe.findAll({raw: true});
    //console.log(allSwipes);
    let allUsers = await User.findAll({raw: true});
    let clientUser = await User.findByPk(userId, {
    
    }).then(function(clientUser) {
      matchInviteSwipes = allSwipes.filter(sp => 
        sp.prospectId === clientUser.id && 
        sp.status === "matched");
      //console.log(matchInviteSwipes);
      if (matchInviteSwipes !== undefined) {
        for (let i = 0; i < matchInviteSwipes.length; i++) {
          let muSwipe = matchInviteSwipes[i];
          //console.log(muSwipe);
          let matchUser = allUsers.find(mu => mu.id === parseInt(muSwipe.userId));
          //console.log(matchUser);        
          if (matchUser !== undefined) {
            let clientUserSwipe = allSwipes.find(us => 
              us.userId === clientUser.id &&
              us.prospectId === matchUser.id);
            //console.log(clientUserSwipe);
            if (clientUserSwipe !== undefined) {  
              let matchRecord = {};
              //console.log(muSwipe);
              matchRecord.clientUserId = clientUser.id;
              matchRecord.matchUserId = matchUser.id;
              matchRecord.game = muSwipe.game;
              matchRecord.matchUsername = matchUser.username;
              matchRecord.matchUserSkillLevel = matchUser.skillLevel;
              matchRecord.matchUserLat = matchUser.lat;
              matchRecord.matchUserLon = matchUser.lon;
              matchRecord.distance = muSwipe.distance;
              matchRecord.clientMessage = clientUserSwipe.message;
              matchRecord.matchMessage = muSwipe.message;
              matchRecords.push(matchRecord);
            }
          }
        }
      }
      //console.log(matchRecords);
    })
    .then(function() {
      res.status(200).json(matchRecords);
    });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {  
  try {
    const matchAccepted = req.query.matchAccepted;
    res.status(200).json(matchAccepted);
  }  catch {
    res.status(500).json(err);
  }
});

module.exports = router;

//dto update functions
function createMatchTransaction(clientUser, prospect, status, swipe) {   
  let msg = ""; 
  let transaction = { }
  //client user fields
  transaction.username = clientUser.username;
  transaction.lat = clientUser.lon;
  transaction.lon = clientUser.lat;
  transaction.favoriteGame = clientUser.favoriteGame;
  transaction.skillLevel = clientUser.skillLevel;
  transaction.email = clientUser.email;
  transaction.testSize = clientUser.testSize;
  transaction.minSkillLevel = clientUser.minSkillLevel;
  transaction.maxSkillLevel = clientUser.maxSkillLevel;
  transaction.message = clientUser.message;
  
  //prospect user fields
  transaction.prospectId = prospect.id;
  transaction.pospectUsername = prospect.username;
  transaction.prospectLat = prospect.lat;
  transaction.prospectLon = prospect.lon;

  //swipe fields
  if (swipe !== undefined) {
    transaction.swipeId = swipe.id;
    transaction.distance = swipe.distance ? 0 : swipe.distance;
    msg = swipe.message;
    if (msg !== undefined) {
      msg = "";
    } else if (msg.length > 200) {
      msg = msg.substring(0, 199);
    }
  } else {
    transaction.swipeId = 0;
    transaction.distance = haversineDistance(clientUser.lat, clientUser.lon, prospect.lat, prospect.lon);
  }

  transaction.message = msg;
  transaction.status = status;

  return transaction;
}

//Find Matches function
///////////////////////////////
function getMatchSessionUsers(clientUser, allUsers, allSwipes) {
  let matchSessionUsers = [];
  let filteredUsers = [];
  let openInviteUsers = [];
  const targetLat = clientUser.lat;
  const targetLon = clientUser.lon;

  let gameFilteredUsers = [];
  gameFilteredUsers = allUsers.filter(prospect =>
    prospect.id !== clientUser.id &&
    prospect.favoriteGame === clientUser.favoriteGame
  );

  gameFilteredUsers.forEach(prospectUser => {

    //make sure client user is in the skill range, specified by prospect user. continue to next prospect if not    
    if (clientUser.skillLevel >= prospectUser.minSkillLevel &&
      clientUser.skillLevel <= prospectUser.maxSkillLevel)  { return; }
    //look for any declined or previously matched swipe to clientUser from prospect
    let ignoreSwipes = allSwipes.filter(sp => 
      sp.userId === prospectUser.id &&
      sp.prospectId === clientUser.id && 
      sp.status !== "invited");

    //look for any unresolved invite swipes from client 
    let inviteSwipesFromClient = allSwipes.filter(sp => 
      sp.prospectId === clientUser.id &&
      sp.userId === prospectUser.id &&      
      sp.status === "invited");

    //if either list has values, continue and exclue prospectUser from results
    if (ignoreSwipes.length > 0) {
      return;
    } else if (inviteSwipesFromClient !== undefined) {
      if (inviteSwipesFromClient.length > 0) {
        //if there is an open invite, add deep copy of user to openInviteUsers and continue for
        openInviteUsers.push(JSON.parse(JSON.stringify(prospectUser)));
      return;
      }
    }

    //otherwise add to filtered list
    filteredUsers.push(prospectUser);
  });

  setRoughDistance(clientUser, filteredUsers);

  //sort ascending by rough distance

  filteredUsers.sort(function(user1, user2) { 
    return user1.roughDistance - user2.roughDistance;
  });

  //take 40 nearest results
  let closeUsers = filteredUsers.slice(0, 39)

  //find more accurate haversine distance closeUsers
  closeUsers.forEach(otherUser => {
    otherUser.distance = haversineDistance(clientUser.lat, clientUser.lon, otherUser.lat, otherUser.lon);
  });

  closeUsers.sort(function(user1, user2) {
    return user1.distance - user2.distance;
  })

  //take closest 10 of those as new array
  matchSessionUsers = closeUsers.slice(0, 9); 

  //add open invites irrespective of distance
  openInviteUsers.forEach(oiu => {
    matchSessionUsers.push(oiu);
  });

  return matchSessionUsers;
}


//Find Matches helper functions
///////////////////////////////////
//rough distance (combined delta of coords)
function setRoughDistance(clientUser, usersFromQuery) {
  usersFromQuery.forEach(qUser => { 
    qUser.roughDistance = Math.abs(Math.abs(clientUser.lat) - Math.abs(qUser.lat)) + Math.abs(Math.abs(clientUser.lon) - Math.abs(qUser.lon));
  });
}

//haversine distance
function haversineDistance(lat_1, lon_1, lat_2, lon_2) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  let R = 6371; // km

  let x1 = lat_2 - lat_1;
  let dLat = toRad(x1);
  let x2 = lon_2 - lon_1;
  let dLon = toRad(x2)
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat_1)) * Math.cos(toRad(lat_2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  //convert to miles
  d /= 1.60934;

  return Math.round(d);
}


