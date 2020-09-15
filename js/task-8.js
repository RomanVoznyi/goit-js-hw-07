// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько
// div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
// < div id = "controls" >
// 	<input type="number" min="0" max="100" step="1" />
// 	<button type="button" data-action="render">Создать</button>
// 	<button type="button" data-action="destroy">Очистить</button>
// </ >

// 	<div id="boxes"></div>

const btnRender = document.querySelector("#controls button[data-action='render']");
const btnDestroy = document.querySelector("#controls button[data-action='destroy']");
const count = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

btnRender.addEventListener("click", function () { createBoxes(count.value) });
btnDestroy.addEventListener("click", destroyBoxes);

const randomColor = () => Math.floor(Math.random() * 255);

function createBoxes(amount) {
	if (+amount <= 0 || amount === "" || +amount > 100) {
		boxes.insertAdjacentHTML("afterbegin", "<p>Please choose amount of boxes you want to create (from 1 to 100)</p>")
	} else {
		destroyBoxes();
		const tempArr = [];
		for (let i = 0; i < +amount; i += 1) {
			tempArr.push(document.createElement("div"));
			tempArr[i].style.cssText = `width:${30 + i * 10}px; height:${30 + i * 10}px;
		background-color:rgb(${randomColor()},${randomColor()},${randomColor()})`;
		}
		boxes.append(...tempArr);
	}
}

function destroyBoxes() {
	boxes.innerHTML = "";
}