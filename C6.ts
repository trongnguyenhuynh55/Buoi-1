import { question } from "readline-sync";
let s:number  = Number(question("Nhap so giay: "));
const a:number = Math.floor (s/3600);
const b:number = Math.floor ((s%3600)/60);
const c:number = Math.floor (((s%3600)%60)%60);
console.log (a + ":" + b + ":" + c);
