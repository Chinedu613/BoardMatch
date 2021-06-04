class MatchTransaction {
    constructor(swipeStatus="") {
        this.userId = 0;
        this.username;
        this.lat = 0;
        this.lon = 0;
        this.favoriteGame = "";
        this.skillLevel = 0;
        this.email;
        this.testSize = 3;
        this.minSkillLevel = 0;
        this.maxSkillLevel = 5;
        this.swipeId = 0;
        this.prospectUserId = 0;
        this.prospectUserName;
        this.prospectLat = 0;
        this.prospectLon = 0;
        this.distance = 0;
        this.message;
        this.status = "open";
        this.game = "";
    }

    setUser(clientUser) {
        this.userId = clientUser.id;
        this.username = clientUser.username;
        this.lat = clientUser.lon;
        this.lon = clientUser.lat;
        this.favoriteGame = clientUser.favoriteGame;
        this.skillLevel = clientUser.skillLevel;
        this.email = clientUser.email;
        this.testSize = user.testSize;
        this.minSkillLevel = user.minSkillLevel;
        this.maxSkillLevel = user.maxSkillLevel;
    }

    setProspectUser(user) {
        this.userId = user.userId;
        this.username = user.username;
        this.prospectLat = user.lat;
        this.prospectLon = user.lon;
        this.game = "";
    }

    setSwipe(swipe) {
        this.swipeId = 0;
        this.distance = 0;
        let msg = swipe.message;
        if (msg.length > 200) {
            msg = msg.substring(0, 199);
        }
        this.message = msg;
        this.status = "open";
        this.game = prospect.game;
    }
}