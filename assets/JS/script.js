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

	//___________________________________________

	//cards

	class card {
		constructor(_img, _title, _desc, _link) {
			(this.img = _img), (this.title = _title), (this.desc = _desc), (this.link = _link);
		}
	}

	let card1 = new card(
		'./assets/img/zaNas/edukacija1.jpg',
		'Едукација',
		'Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата.',
		'https://brainster.co/'
	);
	let card2 = new card(
		'./assets/img/zaNas/nastani.jpg',
		'Настани',
		'Специјално креирани и организирани настани кои ги поврзуваат компаниите. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани',
		'../Project 2/assets/HTML/Events_Space.html'
	);
	let card3 = new card(
		'./assets/img/zaNas/coworking.jpg',
		'Coworking',
		'Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared officе. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.'
	);
	let card4 = new card(
		'./assets/img/zaNas/prostor za nastani.jpg',
		'Простор за настани',
		'Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани.',
		'../Project 2/assets/HTML/Events_Space.html'
	);
	let card5 = new card(
		'./assets/img/partnerstva so tech komp.jpg',
		'Партнерства со Tech компании',
		'Целта и идејата е креирање на tech заедницата која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите.'
	);
	let card6 = new card(
		'./assets/img/IMG_7397.jpg',
		'Иновации за компании',
		'Нов концепт кој ќе им помогне на компаниите да преминат од  стариот во новиот начин на работење. Подгответеја Вашата компанија за дигитална трансформација.'
	);

	let cardArr = [ card1, card2, card3, card4, card5, card6 ];

	cardArr.forEach((element, index) => {
		document.querySelector('.card-gen').innerHTML += `
	 	<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 card2 ">
	 		<div class="card-deck text-left ">
  	 			<div class="card" style="hight: 30%;">
     				<img src="${element.img}" class="card-img-top" alt="...">
     				<div class="card-body">
      					 <h5 class="card-title">${element.title}</h5>
      		 			 <p class="card-text">${element.desc}</p>
     				</div>
     				<div class="cardF">
	 				<a href="${element.link}" target="_blank" class="btn float-right" id = 'strelka'><i class="fas fa-arrow-right"></i></a>
     				</div>
	 			</div>
			 </div>
	    </div>
	 `;
	});

	//______________________________________________________________________________________
	//img left-down

	$('#btn-K').on('click', function() {
		$('.desno').hide();
		$('.levo').show();
	});

	$('#btn-A2').on('click', function() {
		$('.desno').show();
		$('.levo').hide();
	});
	//_____________________________________________________________________________________________________________
	// //cads events

	class cardI {
		constructor(_img, _title, _desc, _link, _id) {
			(this.img = _img), (this.title = _title), (this.desc = _desc), (this.link = _link);
		}
	}

	let card21 = new cardI(
		'./assets/img/Nastani/Code.jpg',
		'Codeworks',
		'Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да нучат што е ново во tech заедницата. Настан кој ги поврзува mid programerite со IT компаниите. Deep Dive Intensive Seminar Ексклузивни семинари кои комбинраат три различни техники на учење'
	);
	let card22 = new cardI(
		'./assets/img/Nastani/instruktori.jpg',
		'Deep Dive into Marketing',
		'Deep Dive inot Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и одните трендови во областа во маркетингот.'
	);
	let card23 = new cardI(
		'./assets/img/Nastani/Hristijan-Nosecka-1024x536.jpg',
		'Deep Dive into Data Science',
		'Deep Dive into Data Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвиците и идните трендови во областа во Data Science.'
	);

	let cardArr2 = [ card21, card22, card23 ];

	function genrateCards() {
		cardArr2.forEach((element, index) => {
			document.querySelector('.kartici-nastani').innerHTML += `
	 	<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 card2 ">
	 	<div class="card-deck text-left">
  	 		<div class="card" style="hight: 30%;">
     			<img src="${element.img}" class="card-img-top" alt="...">
     		<div class="card-body">
      			 <h5 class="card-title">${element.title}</h5>
      		 	 <p class="card-text">${element.desc}</p>
     		</div>
     		<div class="cardF">
	 			<a href="${element.link}" target="_blank" class="btn float-right" id = 'strelka'><i class="fas fa-arrow-right"></i></a>
     		</div>
	 	</div>
	 </div>
	 `;
		});
	}

	genrateCards();

	//________________________________________________________________________________________________

	//sold out

	$('#btn-line-through').on('click', function() {
		$('.badge').show();
		$('.edukacija2 h2').css('text-decoration', 'line-through');
		$('.edukacija2 p').css('text-decoration', 'line-through');
		$('#btn-line-through').css('text-decoration', 'line-through');
	});

	$(function() {
		$('[data-toggle="popover"]').popover();
	});

	$('.popover-dismiss').popover({
		trigger: 'focus'
	});
});
