const DATE = new Date();

const generateHash = () => {
    return crypto.randomUUID();
}

const generateString = (date = DATE, hash = generateHash()) => {
    console.log(date.toISOString() + ": " + hash);
}

setInterval(generateString, 5000);
