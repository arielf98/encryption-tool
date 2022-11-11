const CryptoJS = require("crypto-js");

const TOKEN = "your-token"
// const TOKEN = {
//     partnerId: "WV_0172",
//     clientSecret: "0f92efcf4aa24c4f1ab0ed0819396658ca6d7f3e029950253577e8477964",
//     clientId: "59382cd3c582a8f40de8",
//     VTtoken: "5b6aa04bbeadc022c57598e50ebe24d88bb9d0fcaa3ff97a96d77c942936527f"
// }

// don't share the secret key to non authority person.
const SECRET_KEY = 'your-secret';


// ENCRYPT TOKEN
function createEncryptionToken(token, secretKey, isObject) {
    if (isObject) {
        const tokenEnctypted = CryptoJS.AES.encrypt(JSON.stringify(token), secretKey).toString();
        return encodeURIComponent(tokenEnctypted);
    }
    const tokenEnctypted = CryptoJS.AES.encrypt(token, secretKey).toString();
    return encodeURIComponent(tokenEnctypted);
}

// const objectEncrypton = createEncryptionToken(TOKEN, SECRET_KEY, true);
const stringEncryption = createEncryptionToken(TOKEN, SECRET_KEY, false);
// console.log({ objectEncrypton });
console.log({ stringEncryption });


//DECRYPT TOKEN

// function createDecryptToken(token, secretKey, isObject) {
//     if (isObject) {
//         const tokenDecrypted = CryptoJS.AES.decrypt(token, secretKey).toString(CryptoJS.enc.Utf8);
//         return JSON.parse(tokenDecrypted);
//     }
//     const tokenDecrypted = CryptoJS.AES.decrypt(token, secretKey).toString(CryptoJS.enc.Utf8);
//     return tokenDecrypted;
// }
// const ENCRYPTION_TOKEN = 'U2FsdGVkX1+NK466/gC1qfObSQFVjHTHCNcEN2D9JOyTnkqpV9KDZ9wrshBaHp84vd3hMqgH6Vl3I82zAub1miXKF81r/sITooTwtGxBTc/Wry9fagsudYnk2xU4/2k98RcskYIfSO8XDktJbd5WrD7C9wLcWYBPrKSz5YXNke500nPacTbPNZVspPN1Xjw/J33pUn/dH+pgdt3hOYo6WTGPH6OH1jhtKsiqJBjpVLUVngbrhjroOWc2axLIhxFKldzSqP0NbuoK35y5N7Np+n1yQ1CUnncCckzcd0yx0y1o6UeJpjvgG+JyU7Trmp66qehCsUPDoWTPraTsGWIvNKAuvfSXjqsAETjwK46IqzGwbyhT3CXW9AZRW9ZFttYJ6l1H/0kDJIJibDPtfqkZjYRLjKp0fTYrOOrw7iei3Eq44FCGT3ohBA+MIx7c9s8rS69hoYVPZ1qQSrwg5AilVbMCOBJmaZaSYr/7ee6aYfrhNxDaw8D12bwWGqo4gW7u23wpDvhL2wr6HSYQ/VFW0A==';

// // const objectDecryption = createDecryptToken(ENCRYPTION_TOKEN, SECRET_KEY, true);
// const stringDecryption = createDecryptToken(ENCRYPTION_TOKEN, SECRET_KEY, false);

// // console.log({ objectDecryption });
// console.log({ stringDecryption });