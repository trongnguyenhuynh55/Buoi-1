import { question } from "readline-sync";
console.log ("Nhap x, y: ");
let x: number = Number(question("Nhap x: "));
let y: number = Number(question("Nhap y: "));
const z:number =  ((Math.sqrt(x)) + (Math.abs(x))) / Math.sqrt(x**y) ;
console.log (z);
