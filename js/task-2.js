// Задание 2
// В HTML есть пустой список ul#ingredients.
// < ul id = "ingredients" ></ >
// 	В JS есть массив строк.
const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const list = document.querySelector("#ingredients");

const taglist = [];
for (let i = 0; i < ingredients.length; i++) {
	taglist.push(document.createElement("li"));
	taglist[i].textContent = ingredients[i];
}
list.append(...taglist);