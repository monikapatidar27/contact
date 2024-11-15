const user = require("../controllers/user");
const routes = require("express").Router();

routes.get("/test", async (req, res) => {
    res.send("user working");
});


routes.post("/contact", user.contact);



module.exports = routes;
