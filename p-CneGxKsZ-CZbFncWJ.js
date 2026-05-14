import{a4 as o,a5 as s,a6 as r,a7 as i,a8 as m}from"./vendor-nl-i9EF6.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const c=()=>{const t=window;t.addEventListener("statusTap",(()=>{o((()=>{const n=document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(!n)return;const e=s(n);e&&new Promise((a=>r(e,a))).then((()=>{i((async()=>{e.style.setProperty("--overflow","hidden"),await m(e,300),e.style.removeProperty("--overflow")}))}))}))}))};export{c as startStatusTap};
