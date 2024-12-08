import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/submit", (req, res) => {
  const { name, address, phone, email } = req.body;
  res.send(`Welcome, ${name}! Your data has been submitted.`);
});

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
