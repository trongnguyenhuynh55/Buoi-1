import { question } from "readline-sync";
let r:number  = Number(question("Nhap ban kinh: "));
const pi:number = 3.14;
if (r < 0)
{
    console.log ("Ban kinh sai");
}
else {
    console.log ("Chu vi la: "+ 2*pi*r);
    console.log ("Dien tich la:" + 2*pi*r**2);
}