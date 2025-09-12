import fs from "node:fs/promise"
import express from "express"

const app = express();

const PORT = process.env.PORT || 4004;
let ppCounter = 0;

const updatePPCounter = async () => {
  let data = 0;
  try {
    data = await fs.readFile("/usr/src/app/files/ppcounter.txt", { encoding: "utf8" });
    data = parseInt(data);
  } catch (err) {
    console.error("ERROR:", err);
    return -1;
  }

  console.log("PPCounter:", data);

  await fs.writeFile("/usr/src/app/files/datehash.txt", ++data, err => {
    if (err) console.error("ERROR:", err);
  });

  return data
}

app.get("/", (req, res) => {
  return res.send({ "message": "Try /pingpong :)"});
});

app.get("/pingpong", async (req, res) => {
  const ppCounter = await updatePPCounter();
  return res.send({ "pong": ppCounter });
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
