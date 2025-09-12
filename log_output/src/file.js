import fs from "node:fs"

const DATE = new Date();
let CURRENT_STR = "";

const generateHash = () => {
    return crypto.randomUUID();
}

const generateString = (date = DATE, hash = generateHash()) => {
    const date_hash_str = date.toISOString() + ": " + hash;
    console.log(date_hash_str);
    fs.writeFile("/usr/local/datehash.txt", date_hash_str, err => {
        if (err) console.error("ERROR:", err);
    });
}

setInterval(generateString, 5000);
