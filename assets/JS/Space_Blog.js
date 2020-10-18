$(function() {
	class CardInit {
		constructor(_img, _title, _desc, _span, _class) {
			(this.img = _img), (this.title = _title), (this.desc = _desc), (this.span = _span), (this.class = _class);
		}
	}

	let techCard1 = new CardInit(
		'../img/Space_Blog_Kartici/programming-simply-explained.jpg',
		'Deep Dive семинари кои ќе овозможиваат брз кариерен напредок',
		'Нов продукт од Brainster во Brainster Space. Интензивни дводневни семинари кои ќе ти помогнат од Mid level брзо да го постигнеш твојот Senior напредок',
		'КАРИЕРА',
		'kariera'
	);
	let techCard2 = new CardInit(
		'../img/Space_Blog_Kartici/Team-Picture-1200x600.jpg',
		'Македонско-Американската компанија Upshift доби инвестиција од 3.7 милионо...',
		'Он-дименд платформата за рбота се шири со нова рунда финасирање предводена од Recruit која е најголемата HR Tech компанија во светот...',
		'IMPACT',
		'impact'
	);
	let techCard3 = new CardInit(
		'../img/Space_Blog_Kartici/OFIS LEASURE_01_1.jpg',
		'Што значи денес, твојата канцеларија да е smart?',
		'На отварањето на Бараинстер, добивме супер подарок - smart home уред.Голем дел од нас беа збунети за тоа што се можеме да добиеме со него.',
		'ТЕХНОЛОГИЈА',
		'tehnologija'
	);
	let techCard4 = new CardInit(
		'../img/Space_Blog_Kartici/1_xX6Cpskem0SbqQuPZ8R-4g.jpeg',
		'Како до кариера во Data Science',
		'Од искуство на студентите на нашата академија, решивме да ви помогнеме со некои tips за потребните skills за да започнете да работите Data Science.',
		'DATA SCIENCE',
		'dataScience'
	);
	let techCard5 = new CardInit(
		'../img/Space_Blog_Kartici/20191128_141433810_iOS-1200x600.jpg',
		'Локалната апликација Challenger и нејзиниот импакт. #SpaceFamily',
		'Мисијата на Challinger е создавање општествено одговорна заедница која создава позитивна промена преку развивање на подобри индивидуални навики...',
		'IMPACT',
		'impact'
	);
	let techCard6 = new CardInit(
		'../img/Space_Blog_Kartici/instruktori.jpg',
		'Интевју со Николај Ванчев, арт директор во Thank, Estonia. #SpaceFamily',
		'Николај Ванчев е Creative director во TANK (Естонија). Неговата успешна 12 годишна кариера како арт директор тој ја гради во реномирани агенции...',
		'МАРКЕТИНГ',
		'marketing'
	);
	let techCard7 = new CardInit(
		'../img/Space_Blog_Kartici/1_HLGtY6O2vUHqIyEbWdmBgA.jpeg',
		'Ако не те бива за програмирање дали можеш да има кариера во Tech?',
		'Tech индустријата е најпосакувана област за работа, заради големата побарувачка, секојдневните промени и големиот приход.',
		'КАРИЕРА',
		'kariera'
	);
	let techCard8 = new CardInit(
		'../img/Space_Blog_Kartici/Untitled-design-5-1200x600.jpg',
		'Зошто дизајн, накратко со Дијана Димитриевска #SpaceFamily',
		'Интервју со Дијана Димитриевска, графички дизајнер, DJ и инструктор на Академијата за графички дизајн во Brainster.',
		'ДИЗАЈН',
		'dizajn'
	);
	let techCard9 = new CardInit(
		'../img/Space_Blog_Kartici/difference-between-ux-ui-ux-ui-min.png',
		'Што е потребно за добар мобилен дизајн',
		'UX/UI дизајнерите се дигитални продукт дизајнери. нивната задача е да создадат корисен, релевантен и еднставен за корисниците продукт.',
		'ДИЗАЈН',
		'dizajn'
	);

	let techCardsArr = [
		techCard1,
		techCard2,
		techCard3,
		techCard4,
		techCard5,
		techCard6,
		techCard7,
		techCard8,
		techCard9
	];

	techCardsArr.forEach((element) => {
		document.querySelector('.card-init').innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 ${element.class} card2">
        <div class="card-deck text-left">
              <div class="card" style="hight: 30%;">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.desc}</p>
                </div>
                <div class="cardF carText">
                <span>${element.span}</span>
                <a href="#" target="_blank" class="btn float-right" id = 'strelka'><i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
   </div>
        `;
	});

	$('.btnNav2').on('click', function() {
		if ($(this).hasClass('btnAllCards')) {
			$('.kariera').css({ display: 'block' });
			$('.dizajn').css({ display: 'block' });
			$('.impact').css({ display: 'block' });
			$('.marketing').css({ display: 'block' });
			$('.dataScience').css({ display: 'block' });
			$('.tehnologija').css({ display: 'block' });
		}
		if ($(this).hasClass('btnKariera1')) {
			$('.kariera').css({ display: 'block' });
			$('.dizajn').css({ display: 'none' });
			$('.impact').css({ display: 'none' });
			$('.marketing').css({ display: 'none' });
			$('.dataScience').css({ display: 'none' });
			$('.tehnologija').css({ display: 'none' });
		}
		if ($(this).hasClass('btnTehnologija1')) {
			$('.kariera').css({ display: 'none' });
			$('.dizajn').css({ display: 'none' });
			$('.impact').css({ display: 'none' });
			$('.marketing').css({ display: 'none' });
			$('.dataScience').css({ display: 'none' });
			$('.tehnologija').css({ display: 'block' });
		}
		if ($(this).hasClass('btnDataScience1')) {
			$('.kariera').css({ display: 'none' });
			$('.dizajn').css({ display: 'none' });
			$('.impact').css({ display: 'none' });
			$('.marketing').css({ display: 'none' });
			$('.dataScience').css({ display: 'block' });
			$('.tehnologija').css({ display: 'none' });
		}
		if ($(this).hasClass('btnMarketing1')) {
			$('.kariera').css({ display: 'none' });
			$('.dizajn').css({ display: 'none' });
			$('.impact').css({ display: 'none' });
			$('.marketing').css({ display: 'block' });
			$('.dataScience').css({ display: 'none' });
			$('.tehnologija').css({ display: 'none' });
		}
		if ($(this).hasClass('btnDizajn1')) {
			$('.kariera').css({ display: 'none' });
			$('.dizajn').css({ display: 'block' });
			$('.impact').css({ display: 'none' });
			$('.marketing').css({ display: 'none' });
			$('.dataScience').css({ display: 'none' });
			$('.tehnologija').css({ display: 'none' });
		}
		if ($(this).hasClass('btnImpact1')) {
			$('.kariera').css({ display: 'none' });
			$('.dizajn').css({ display: 'none' });
			$('.impact').css({ display: 'block' });
			$('.marketing').css({ display: 'none' });
			$('.dataScience').css({ display: 'none' });
			$('.tehnologija').css({ display: 'none' });
		}
	});

	// $('.btnNav2').on('click', function(){
	// 	//console.log('click');
	// 	$.each(techCardsArr, function (index, element) {
	// 		 let el = element;
	// 		 console.log(el);
	// 		if($(el).hasClass('kariera')){
	// 			console.log(el);
	// 			$('.dizajn').css('display', 'none');
	// 		}
	// 	});
	// })
});
