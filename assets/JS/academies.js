$(function(){

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

	$(function() {
		$('[data-toggle="popover"]').popover();
	});

	$('.popover-dismiss').popover({
		trigger: 'focus'
	});


	// class akademii {
	// 	constructor(_img, _title, _li1, _li2, _li3, _li4, _id) {
	// 		(this.img = _img), (this.title = _title), (this.li1 = _li1), (this.li2 = _li2), (this.li3 = _li3), (this.li4 = _li4), (this.id = _id);
	// 	}
	// }	


	// let ak1 = new akademii(
	// 	'./assets.img/akademii/neonbrand-gYf49RB7bvE-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card1'		
	// );
	// let ak2 = new akademii(
	// 	'./assets.img/akademii/neonbrand-gYf49RB7bvE-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card2'	
	// );
	// let ak3 = new akademii(
	// 	'./assets.img/akademii/christopher-gower-m_HRfLhgABo-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card3'	
	// );
	// let ak4 = new akademii(
	// 	'./assets.img/akademii/kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card4'	
	// );
	// let ak5 = new akademii(
	// 	'./assets.img/akademii/markus-spiske-hvSr_CVecVI-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card5'	
	// );
	// let ak6 = new akademii(
	// 	'./assets.img/akademii/studio-republic-fotKKqWNMQ4-unsplash.jpg',
	// 	'Академија за графички дизајн',
	// 	'Слободни места: 4',
	// 	'Уписи до 26.08.2019',
	// 	'Стани дизајнер за 7 месеци',
	// 	'Партнери за вработување:5',
	// 	'card6'	
	// );


	// 	let akArr = [ak1, ak2, ak3, ak4, ak5, ak6 ];
		
	// 	akArr.forEach(element => {
    //         document.querySelector('.karticiAkademii').innerHTML += `            
	// 		<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
	// 		<div id=${element.id}>            
    //         <div class="card cardImg">
    //           <div class="card-body text-left">
    //             <h5 class="card-title ">${element.title}</h5>         
    //             <ul>
    //               <li><i class="far fa-user"></i>${element.li1}</li>
    //               <li><i class="far fa-calendar-alt"></i></i>${element.li2}</li>
    //               <li><i class="far fa-clock"></i>${element.li3}</li>
    //               <li><i class="far fa-handshake"></i>${element.li4}</li>
    //             </ul>     
    //           </div>
	// 		</div> 
	// 		</div>        
    //       </div>
    //         `;	     
          
			
	// 	});


});

