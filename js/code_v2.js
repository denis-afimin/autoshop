//---Добавляем прослушку на всём документе:
document.addEventListener("click", function(event){
	//Отслеживаем клики на кнопках - и +.

	let btnMinus = event.target.closest('.item__order__choice-minus');
	let btnPlus = event.target.closest('.item__order__choice-plus');

	if (btnMinus) {
		if (btnMinus.nextElementSibling.innerText > 0) {
			btnMinus.nextElementSibling.innerText--;
		}
		//console.log(btnMinus.nextElementSibling.innerText);
	}

	if (btnPlus) {
		btnPlus.previousElementSibling.innerText++;
		//console.log(btnPlus.previousElementSibling.innerText);
	}

});
