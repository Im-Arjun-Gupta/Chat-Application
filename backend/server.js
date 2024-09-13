const express = require("express");
const chats = require("./data/data");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

const app = express();

require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on port", process.env.PORT);
});

dbConnect();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);
