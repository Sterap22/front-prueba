export function isActive() {
    return window.localStorage.getItem("token")
      ? true
      : false;
}