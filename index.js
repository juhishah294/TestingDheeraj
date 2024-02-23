require("dotenv").config();

const express = require("express");
const port = process.env.PORT;
const app = express();

app.get("/", async (req, res, next) => {
  res.send("Hello,Toystack!!");
});

app.listen(port, () => console.log(`Listening to port ${port}`));
