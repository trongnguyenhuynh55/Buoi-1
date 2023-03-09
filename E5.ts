import { question } from "readline-sync";

let F:number = Number(question("Nhap do F: "));
const C:number = 5*(F - 32)/9;
console.log (C);