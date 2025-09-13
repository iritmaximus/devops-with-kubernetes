import fs from "node:fs/promises"
import express from "express"

const app = express();
const PORT = process.env.PORT || 5005;
const IMG_API_URL = process.env.IMG_API_URL || "https://picsum.photos/1200";



const updateImage = async () => {
  console.log("Updating image.")
  const response = await fetch(IMG_API_URL);
  if (!response.ok)
    throw new Error(`Response status: ${response.status}`);
  const result = await response.arrayBuffer();
  const buffer = Buffer.from(result);
  await saveImageToFile(buffer);
}

setInterval(updateImage, 600000);

const getNewImage = async () => {
  try {
    const savedFile = await fs.readFile("/usr/src/app/files/randImg.jpg");
    if (savedFile.length > 0) {
    console.log("Existing file found!");
      return;
    }
  } catch (err) {
    console.error("ERROR:", err);
  }
  console.log("Didn't find existing image, fetching a new one.");
  updateImage();
}

const saveImageToFile = async (data) => {
  await fs.writeFile("/usr/src/app/files/randImg.jpg", data);
  console.log("Saved data to file.");
}

app.get("/", async (req, res) => {
  const url = "http://" + req.get("host");
  console.log(url);
  return res.send(`<h1>Project app :)!</h1><img src="${url}/randImg.jpg" width=500 height=500 alt="Nice random image :)">`);
});

app.get("/randImg.jpg", async (req, res) => {
  console.log("Image fetched :)");
  await getNewImage();
  res.sendFile("/usr/src/app/files/randImg.jpg");
})

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
