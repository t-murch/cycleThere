const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/dist", express.static("dist"));

console.log("Up and running on " + PORT);

app.listen(PORT);
