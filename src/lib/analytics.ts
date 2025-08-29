export function loadGA(id: string) {
if (!id) return;
const s = document.createElement("script");
s.async = true;
s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
document.head.appendChild(s);
window.dataLayer = window.dataLayer || [];
// @ts-ignore
function gtag(){ dataLayer.push(arguments as unknown as never); }
// @ts-ignore
gtag("js", new Date());
// @ts-ignore
gtag("config", id);
}