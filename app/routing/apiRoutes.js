var friends = require("../data/friends");

module.exports = function(app) { 
    //Returns all friends json
    app.get ("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        //Recieve 
        var user = req.body;

        //parseINT scores

        for(var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseINT(user.scores[i]);
        }

        //default friend match 
         
        var bestFriendIndex = 0;                                                                                           
        var mininumDifference = 40;

        for(var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for(var j = 0; j < friends[i].scores.length; j++) {
                var difference  = Math.abs(user.scores[J] - friends[i].scores[J]);
                totalDifference += difference;
        }

        if(totalDifference < mininumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
        }
    }

    // add user to array- after complete
    friends.push(user);

    res.json(friends[bestFriendIndex]);

});

};