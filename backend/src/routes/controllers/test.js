// require("dotenv").config();

exports.test = (req, res) => {
    console.log("test route hit");
    console.log(req);
    res.json({ message: "Hello from server!" });
};