import { question } from "readline-sync";
let a:number  = Number(question("Nhap bien so 5 so: "));
const b:number = Math.floor(a/10000) + Math.floor((a%10000)/1000) + Math.floor((a%1000)/100) + Math.floor((a%100)/10) + Math.floor(a%10);
const c:number = Number(String(b));
console.log (Math.floor(c/10) + Math.floor(c%10));