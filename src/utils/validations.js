import * as CryptoJS from "crypto-js";

export function isActive() {
    return window.localStorage.getItem("token")
      ? true
      : false;
}
export function getUser() {
  var user = null;
  if (isActive()) {
    user = JSON.parse(
      CryptoJS.AES.decrypt(
        window.localStorage.getItem("user"),
        "Wsweh38w_ds"
      ).toString(CryptoJS.enc.Utf8)
    );
    user["id"] = user["id"];
  }

  return user;
}
export function closeSession() {
  window.localStorage.clear();
  window.location.href = "/";
}
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email,' llega',re.test(email));
  return re.test(email);
}