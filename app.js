const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node.js from AWS - Deployment successful.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
