const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();

app.use(express.json());
app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  dbConnect();
  console.log("server is running on port", process.env.PORT);
});
