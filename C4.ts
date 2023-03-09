import { question } from "readline-sync";
let s:number  = Number(question("Nhap so luong: "));
let g:number  = Number(question("Nhap don gia: "));
const tien:number = s*g;
const thue:number = tien/10;
console.log ("Tien: " + tien);
console.log ("Thue GTGT:" + thue);