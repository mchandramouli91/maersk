const randomContainer = document.querySelector(".tile-container");
const shuffleButton = document.getElementById("shuffleBtnId");
const sortButton = document.getElementById("sortBtnId");
const randomArray = [9, 4, 3, 5, 6, 7, 2, 1, 8];

shuffleButton.addEventListener('click', (e) => {
	shuffleTiles(randomArray);
});
sortButton.addEventListener('click', (e) => {
	randomArray.sort();
	RemoveOldLayout();
	CreateLayout(randomArray);
});

function shuffleTiles(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	RemoveOldLayout();
	CreateLayout(array);
}

function RemoveOldLayout() {
	const node = document.querySelector(".tile-container");
	let firstChild = node.firstChild;
	while (firstChild) {
		node.removeChild(firstChild);
		firstChild = node.firstChild;
	}
}

function CreateLayout(array) {
	const fragment = document.createDocumentFragment();
	array.forEach((val, i) => {
		let tile = document.createElement('div');
		tile.innerText = val;
		tile.classList.add('tile');
		tile.classList.add(`tile-${val}`);
		fragment.appendChild(tile);
	});
	randomContainer.appendChild(fragment);
}

shuffleTiles(randomArray);

