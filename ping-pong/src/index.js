import express from "express"

const app = express();

const PORT = process.env.PORT || 4004;
let ppCounter = 0;

app.get("/", (req, res) => {
    return res.send({ "message": "Try /pingpong :)"});
});

app.get("/pingpong", (req, res) => {
    return res.send({ "pong": ppCounter++ });
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Handle signals properly
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  server.close(() => {
    console.log('Closed out remaining connections');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received.');
  server.close(() => {
    console.log('Closed out remaining connections');
  });
});
