const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
// routes
app.use(express.json());

app.use("/users", userRoute);
mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
