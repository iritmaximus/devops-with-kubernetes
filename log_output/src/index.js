const DATE = new Date();

const generateHash = () => {
    return crypto.randomUUID();
}

const generateString = (date = DATE, hash = generateHash()) => {
    console.log(date.toISOString() + ": " + hash);
}

setInterval(generateString, 5000);

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received.');
  process.exit(1);
});
