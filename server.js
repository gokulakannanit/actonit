const express = require("express");
const app = express();
const http = require("http").Server(app);

app.use("/public", express.static("public"));
 
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/service", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

http.listen(3000, () => console.log("listening on *:3000"));