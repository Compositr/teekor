import express from "express";
import path from "path";
import helmet from "helmet";

const app = express();
const port = process.env.PORT ?? 80;

// Middleware
app.use(helmet());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Full snek
app.get("/fullsnek.png", (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/fullsnek.png"));
});


// For gifs
app.get(/.+\.gif$/i, (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/snek.gif"));
});

// For pngs
app.get(/.+\.png$/i, (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/snek.png"));
});

// Base path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/html/index.html"));
});
