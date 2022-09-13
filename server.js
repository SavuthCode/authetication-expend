const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Call DB connection

connectDB();
app.use("/api/users", require("./routes/api/users"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever running on port${PORT}`));
