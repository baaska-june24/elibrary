import CryptoJS from "crypto-js";
import Auth from "@aws-amplify/auth";

const KEY = "F5WYjaYV2EyCANB7";

const Decrypt = encrypted_data => {
  var ciphertext = CryptoJS.enc.Base64.parse(encrypted_data);

  // split iv and ciphertext
  var iv = ciphertext.clone();
  iv.sigBytes = 16;
  iv.clamp();
  ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
  ciphertext.sigBytes -= 16;

  var key = CryptoJS.enc.Utf8.parse(KEY);

  // decryption
  var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
    iv: iv,
    mode: CryptoJS.mode.CFB
  });

  var plain = CryptoJS.enc.Latin1.stringify(decrypted);
  return plain;
};

export const document_info_url = doc_id => {
  const base_url = process.env.API_ENDPOINT + "/reader";
  let url = base_url + "/info/";
  return url + doc_id;
};

export const page_url = (doc_id, page_number) => {
  const base_url = process.env.API_ENDPOINT + "/reader";
  let url = base_url + "/encrypt/";
  return url + doc_id + "/" + page_number;
};

export const get_headers = async () => {
  const idToken = (await Auth.currentSession()).getIdToken().getJwtToken();
  const headers = { Authorization: "Bearer " + idToken };
  return headers;
};

export default Decrypt;
