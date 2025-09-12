import express from "express"

const app = express();

app.get("/", (req, res) => {
    return res.send({ "Current string": CURRENT_STR });
})

const PORT = process.env.PORT || 3000;
const DATE = new Date();
let CURRENT_STR = "";

const generateHash = () => {
    return crypto.randomUUID();
}

const generateString = (date = DATE, hash = generateHash()) => {
    const date_hash_str = date.toISOString() + ": " + hash;
    console.log(date_hash_str);
    CURRENT_STR = date_hash_str;
}

setInterval(generateString, 5000);


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle signals properly
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  server.close(() => {
    console.log('Closed out remaining connections');
  });
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received.');
  server.close(() => {
    console.log('Closed out remaining connections');
  });
  process.exit(1);
});
