import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Gift on Time Backend API");
});

export default app;
