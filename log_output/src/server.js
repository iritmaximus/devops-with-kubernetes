import fs from "node:fs/promises"
import express from "express"

const app = express();

app.get("/logoutput", async (req, res) => {
  const dateHashStr = await getCurrentDateHash();
  const ppCounter = await getCurrentPPCounter();
  console.log("Current string:", dateHashStr, "Current Ping Pong counter:", ppCounter);
  return res.send({ "Current string": dateHashStr, "Ping Pongs": ppCounter });
})

const getCurrentDateHash = async () => {
  try {
    return await fs.readFile("/usr/src/app/files/datehash.txt", { encoding: "utf8" });
  } catch (err) {
    console.error("ERROR:", err);
    return "-";
  }
}

const getCurrentPPCounter = async () => {
  try {
    const data = await fs.readFile("/usr/src/app/files/ppcounter.txt", { encoding: "utf8" });
    console.log("PPCounter:", data);
    return parseInt(data);
  } catch (err) {
    console.error("ERROR:", err);
    return -1
  }
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
