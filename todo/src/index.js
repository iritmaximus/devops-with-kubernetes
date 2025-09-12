import express from "express"

const app = express();
const PORT = process.env.PORT || 5005;

app.get("/ping", (req, res) => {
    return res.send({ "message": "pong" });
})

app.listen(PORT, () => {
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
