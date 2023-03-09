import { question } from "readline-sync";


let a:string = question("Nhap so lon hon 1000: ");
const b:number = Number(a.slice(-3));
console.log ("So hang tram la: " + Math.floor(b / 100) + "; So hang chuc la: " + Math.floor((b % 100)/10) + "; So hang don vi la: " + Math.floor(b % 10))
