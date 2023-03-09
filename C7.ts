import { question } from "readline-sync";
console.log ("Nhap diem di (a:b)");
let a: number = Number(question("Nhap a: "));
let b: number = Number(question("Nhap b: "));
console.log ("Nhap diem den (x:y)");
let x: number = Number(question("Nhap x: "));
let y: number = Number(question("Nhap y: "));
const m:number = Math.sqrt ((a - x)**2 + (b - y)**2);
console.log (m);

