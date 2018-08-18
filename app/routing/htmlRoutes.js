var path = require("path");

module.exports = function(app) {
    //survey entry aka succuss
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //IF ERROR-RETURN  TO HOME PAGE
    app.use(function(req. res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });
    

};