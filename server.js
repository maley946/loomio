
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Loomio!",
    status: "running"
  });
});

app.post("/webhook", (req, res) => {
  console.log("Webhook event received:", req.body);

  res.json({
    message: "Loomio received your event!",
    received: req.body
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Loomio server running on port ${PORT}`);
});
