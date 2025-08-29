export function setCookie(name: string, value: string, days = 180) {
const d = new Date();
d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
export function getCookie(name: string) {
return document.cookie.split("; ").find((r) => r.startsWith(name + "="))?.split("=")[1];
}