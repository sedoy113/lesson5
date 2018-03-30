	let menuItem = document.querySelectorAll('.menu-item'),
			menu = document.querySelector('.menu'),
			menuLi5 = document.createElement('li'),
			getAdv = document.getElementsByClassName('adv'),
			title = document.getElementById('title'),
			idPrompt = document.getElementById('prompt');

		//замена фона
		document.body.style.background = "url('img/apple_true.jpg')";
		//меняем местами пункты меню
		menu.insertBefore(menuItem[2], menuItem[1]);
		//добавляем пятый пункт меню
		menuLi5.classList.add('menu-item');
		menuLi5.textContent = 'Пятый пункт';
		menu.appendChild(menuLi5);

		//удалим рекламу
			getAdv[0].style.display = 'none';
			//замена заголовка
		title.textContent = 'Мы продаем только подлинную технику Apple';
		//выводим надпись в окне
	let review = prompt('Как вы относитесь к технике Apple?', 'Хорошо :) I love Apple!!!');
		idPrompt.textContent = review;