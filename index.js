const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
    res.json("api is")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
