import fs from "node:fs/promises"
import express from "express"

const app = express();

app.get("/", async (req, res) => {
  const dateHashStr = await getCurrentDateHash();
  console.log("Current string:", dateHashStr);
  return res.send({ "Current string": dateHashStr });
})

const getCurrentDateHash = async () => {
  try {
    const data = await fs.readFile("/usr/src/app/files/datehash.txt", { encoding: "utf8" });
    console.log("Data (dateHashStr):", data);
    return data;
  } catch (err) {
    console.error("ERROR:", err);
    return "-";
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
