//Отслеживаем клик на всём документе
document.addEventListener("click", function(event){

	let btnAdd = event.target.closest('.item__basket');

	if (btnAdd) {
		//Получаем в переменную карточку с товаром
		let card = btnAdd.closest('.body__product__item');
		//Создаём объект с данными карточки товара
		let productCar = {
			title: card.querySelector('.item__title').innerText ,
			imgSrc: card.querySelector('img').getAttribute('src') ,
			price: card.querySelector('.item__order__price').innerText ,
			counter: card.querySelector('.item__order__choice-number').innerText,
			id: card.dataset.id
		};

		//Если колличество товара выбрано > 0
		if (productCar.counter > 0) {
			if (!(document.querySelector('.newdiv'))) {
				//Убираем надпись корзина пуста
				document.querySelector('.body__order__basket').classList.add('delete');
			}

				//Проверяем есть ли такой элемент в корзине
				let tovar = document.querySelector('.body__order').querySelector(`[data-id="${productCar.id}"]`);
				if (tovar) {
					//Считаем новое колличество товара
					let count2 = parseInt(tovar.querySelector('p span').innerText) + +(productCar.counter);
					//Вписываем новое колличество товара в заказ
					tovar.querySelector('p span').innerText = count2 + ' шт.';
					//Меняем сумму заказа на новую
					document.querySelector('.body__order__summ span').innerText = count2 * parseFloat(productCar.price) + '$';

				} else {

						//Создаём новый элемент - тег div
						let newDiv = document.createElement('div');
						newDiv.className = "newdiv";
						//добавляем атрибут data-id
						newDiv.setAttribute('data-id', productCar.id);
						//Наполняем новый элемент
						newDiv.innerHTML = `
							<img src="${productCar.imgSrc}">
							<p>${productCar.title} <br> <span>${productCar.counter} шт.</span></p>
							`;
						//Вставляем новый элемент
						document.querySelector('.body__order__title').after(newDiv);
						//Считаем стоимость товара
						let allPrice = document.querySelector('.body__order__summ span').innerText;
						let newPrice = productCar.counter * parseFloat(productCar.price) + parseFloat(allPrice);
						document.querySelector('.body__order__summ span').innerText = newPrice + '$';
							}

		}
		//Сброс счётчика товара после добавления
		card.querySelector('.item__order__choice-number').innerText = 0;

	}
});



