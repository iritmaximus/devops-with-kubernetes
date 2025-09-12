import fs from "node:fs"
import express from "express"

const app = express();

app.get("/", (req, res) => {
  const dateHashStr = getCurrentDateHash();
  console.log("Current string:", dateHashStr);
  return res.send({ "Current string": dateHashStr });
})

const getCurrentDateHash = () => {
  let dateHastStr = "";
  fs.readFile("/usr/src/app/files/datehash.txt", "utf8", (err, data) => {
    if (err) {
      console.error("ERROR:", err);
      return "-";
    }
    dateHashStr = data;
  });
  return dateHashStr;
}

const PORT = process.env.PORT || 3000;

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
