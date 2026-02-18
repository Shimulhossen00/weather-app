const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apikey = process.env.OPENWEATHER_API_KEY;

    if (!city) return res.status(400).json({ error: "City is required" });

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
console.log("API Key:", process.env.OPENWEATHER_API_KEY);

app.listen(3000, () => console.log("Server running on port 3000"));
