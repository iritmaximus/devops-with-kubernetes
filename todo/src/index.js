import express from "express"

const app = express();
const PORT = process.env.PORT || 5005;

app.get("/ping", (req, res) => {
    return res.send({ "message": "pong" });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
