const cryptoJS = require('crypto-js');

const accessToken = '<facebook_page_access_token>';
const clientSecret = '<facebook_app_secret_key>';
const appsecretProof = cryptoJS.HmacSHA256(accessToken, clientSecret).toString(cryptoJS.enc.Hex);

console.log(appsecretProof);
