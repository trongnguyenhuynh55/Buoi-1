import { question } from "readline-sync";

let x:number = Number(question("Nhap so tu nhien x: "));
let y:number = Number(question("Nhap so mu y: "));
const a:number = Math.sqrt(x**y)
console.log (a)
