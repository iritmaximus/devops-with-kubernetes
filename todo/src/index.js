import express from "express"

const app = express();
const PORT = process.env.PORT || 5005;
const IMG_API_URL = process.env.IMG_API_URL || "https://picsum.photos/1200";


app.get("/", async (req, res) => {
  const image = await getNewImage();
  return res.send("<p>Hello world!</p>");
});

const getNewImage = async () => {
  const response = await fetch(IMG_API_URL);
  if (!response.ok)
    throw new Error(`Response status: ${response.status}`);
  const result = await response.json();
  console.log(result);
  return result;
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
