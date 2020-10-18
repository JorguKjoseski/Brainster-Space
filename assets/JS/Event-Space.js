$(function() {
	$('.btn-toggle').click(function() {
		$('.nav-toggle').slideToggle();
	});

	$('.nav-link').hover(
		function() {
			$(this).css('border-color', '#D5B12A');
		},
		function() {
			$(this).css('border-color', 'transparent');
		}
	);


// divSliki


	// class Photo {
	// 	constructor(_img, _figcaption, _class) {
	// 		(this.img = _img), (this.figcaption = _figcaption), (this.class = _class);
	// 	}
	// }

	// let photo1 = new Photo('../img/Renderi/2.jpg', 'Brainster', 'rendPhoto');
	// let photo2 = new Photo('../img/Renderi/C3 EXIBITION_1.jpg', 'Конференциска сала', 'rendPhoto');
	// let photo3 = new Photo('../img/Renderi/C3 2.jpg', 'Сала со бина', 'rendPhoto');
	// let photo4 = new Photo('../img/Renderi/C3 1.jpg', 'Адаптибилна училница', 'rendPhoto');
	// let photo5 = new Photo('../img/Renderi/C2 1.jpg', 'Училница', 'rendPhoto');
	// let photo6 = new Photo('../img/Renderi/C1 1.jpg', 'Училница', 'rendPhoto');
	// let photo7 = new Photo('../img/Renderi/HOL KON SEDENJE.jpg', 'Хол', 'rendPhoto');
	// let photo8 = new Photo('../img/Renderi/C1 4.jpg', 'Канцелариски простор', 'rendPhoto');
	// let photo9 = new Photo('../img/KITCHEN_03.jpg', 'Space Kitchen', 'rendPhoto');

	// let photoArr = [ photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9 ];

	// function rendEventPhoto() {
	// 	photoArr.forEach((element) => {
	// 		document.querySelector('.photoDiv').innerHTML += `						
	// 		<div class="card-deck">
	// 		<div class="card border-0">
	// 			<img class="card-img-top" src="${element.img}">
	// 			<figcaption class="figure-caption">${element.figcaption}</figcaption>
	// 		</div>

	// 	`;
	// 	});
	// }

	// rendEventPhoto();

	//footer

	$(function() {
		$('[data-toggle="popover"]').popover();
	});

	$('.popover-dismiss').popover({
		trigger: 'focus'
	});
});


