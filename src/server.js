require("dotenv").config;
const express = require("express");
const cors = require("cors");

const User = require("./users/model");

const userRouter = require("./users/routes");

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
