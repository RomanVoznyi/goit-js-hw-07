// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.
// < input id = "font-size-control" type = "range" />
// 	<br />
// 	<span id="text">Абракадабра!</span>

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.addEventListener("input", function () { changeSize(range.value) });

text.style.cssText = "font-size: 20px; font-style: italic; color: red;";
const baseFontSize = parseInt(text.style.fontSize);

function changeSize(value) {
	text.style.fontSize = `${baseFontSize * value / 50}px`;
}