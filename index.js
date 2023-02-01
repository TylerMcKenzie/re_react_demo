const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, my friend.");
});

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`)
});
