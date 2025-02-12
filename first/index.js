// 문자열 : '', "", `` 중 하나는 꼭 사용해야함
const myString = "Myeongjun Kim";

const body = document.querySelector("body");
const p = document.createElement("p");

p.innerText = myString;

p.style.color = "blue";
p.className = "header";

body.append(p);
