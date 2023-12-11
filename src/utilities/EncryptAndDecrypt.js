// EncryptAndDecrypt.js
import CryptoJS from 'crypto-js';

const encryptionKey = localStorage.getItem('lockScreenPin') || '0000';

function encryptData(data) {
  const jsonString = JSON.stringify(data);

  const encrypted = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();

  return encrypted;
}

function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decrypted);
}

export { encryptData, decryptData };
