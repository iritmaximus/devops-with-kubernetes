import fs from "node:fs/promises"
import express from "express"

const app = express();
const PORT = process.env.PORT || 5005;
const IMG_API_URL = process.env.IMG_API_URL || "https://picsum.photos/1200";


app.get("/", async (req, res) => {
  const image = await getNewImage();
  return res.send("<p>Hello world!</p>");
});

const getNewImage = async () => {
  try {
    const savedFile = await fs.readFile("/usr/src/app/files/randImg.jpg");
    if (savedFile.length > 0) {
      return savedFile;
    }
  } catch (err) {
    console.error("ERROR": err);
  }

  const response = await fetch(IMG_API_URL);
  if (!response.ok)
    throw new Error(`Response status: ${response.status}`);
  const result = await response.blob();
  await saveImageToFile(result);
  return result;
}

const saveImageToFile = async (data) => {
  await fs.writeFile("/usr/src/app/files/randImg.jpg", data);
}

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
