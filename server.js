const express = require("express");

const app = express();


require("dotenv").config();

app.use(express.json());

const cors = require("cors");
app.use(cors());

let dbConnect = require("./dbConnect");
dbConnect.connectMysql();

let userRoute = require("./routes/userRoute");
app.use("/user", userRoute);

let postRoute = require("./routes/postRoute");
app.use("/post", postRoute);

// parse requests of content-type -application/json


app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Sequelize application." });
  res.json(data);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
