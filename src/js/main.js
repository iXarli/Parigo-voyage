//Lazy load images
const images = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        //console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    });
}

function loadImage(image) {
    image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
});

//Modal forms
let modalButton = document.querySelectorAll('.header-services__button'),
	inputButton = document.querySelectorAll('.form-modal__button'); 


	for(i = 0; i < modalButton.length; i++){
		modalButton[i].onclick = openModalForms; 
	 }

	// for(c = 0; c < inputButton.length; c++){
	// 	inputButton[c].onclick = openInputForms;
	// }

	function openModalForms(){
		let data = this.getAttribute('data');
		if(!this.classList.contains('active')){
			this.classList.add('active');
			document.querySelector(`.form-inner[data='${data}']`).classList.add('form-active');
		}else{
			this.classList.remove('active');
			document.querySelector(`.form-inner[data='${data}']`).classList.remove('form-active');
		}
	}

	// function openInputForms(){
	// 	for(i = 0; i < modalButton.length; i++){
	// 		modalButton[i].classList.remove('active');
	// 	}
	// 	let formInner = document.querySelectorAll('.form-inner');
	//
	// 			formInner.forEach(function(event) {
	// 				event.classList.remove('form-active');
	// 			});
	//
	// 	swal("Ваша заявка успешно отправлена!"," ", "success");
	// }

//Закрытие модального окна
let wind = window,
		formButtonClose = document.querySelectorAll('.form-modal_close'),
		formButtonCloseIcon = document.querySelectorAll('.fa-times-circle');
		wind.onclick = closeModalWindow;

	formButtonClose.forEach(function(event) {
		event.onclick = closeModal;
	});

	formButtonCloseIcon.forEach(function(event) {
		event.onclick = closeModal;
	});

 function closeModalWindow(event) {
		let formInner = document.querySelectorAll('.form-inner');
				formInner.forEach(function(e) {
					if(event.target == e) {
						closeModal();
					};
				});

	
};

function closeModal() {
	let formInner = document.querySelectorAll('.form-inner');
			formInner.forEach(function(event) {
				event.classList.remove('form-active');
			});
	for(b = 0; b < modalButton.length; b++){
		modalButton[b].classList.remove('active');
	};
};


//Закрытие модального окна End

//Modal forms END
// Расскрытие таблицы
let tableBlock = document.querySelectorAll('.table-block');

//!Перебор с помощью forEach
	
tableBlock.forEach(function(event){
	event.onclick = openTable;
});

//? Перебор с помощью цикла 

// for(i = 0; i < tableBlock.length; i++){
// 	tableBlock[i].onclick = openTable;
// }

function openTable(){

	let data = this.getAttribute('data');

	if(!this.classList.contains('table-block_active')){

		this.classList.add('table-block_active');
		document.querySelector(`.table-hidden[data="${data}"]`).classList.add('table-visible');

	}else{

		this.classList.remove('table-block_active');
		document.querySelector(`.table-hidden[data="${data}"]`).classList.remove('table-visible');

	}
}

//Button to Bottom

//Попиксельная прокрутка
// window.onload = function() {
// 	let buttonBottom = document.querySelector('.header-down'),
// 		scrolled, timer;
//
// 	    buttonBottom.onclick = scrollBottom;
//
// 	    function scrollBottom() {
// 			scrolled = window.pageYOffset;
// 			scrollToTop();
// 		}
//
// 		function scrollToTop() {
// 	    	if(scrolled <= 1000) {
// 	    		window.scrollTo(0, scrolled);
// 	    		scrolled = scrolled + 7;
// 	    		timer = setTimeout(scrollToTop, 3)
// 			}else if(scrolled >= 1000) {
// 	    		clearTimeout(timer);
// 			}
// 		}
// };

//lite mode

const liteWrapper = document.querySelector('.lite-wrapper');
      liteWrapper.onclick = nightMode;

      function nightMode() {
      	let wraPper = document.querySelectorAll('.nightMode');
      		wraPper.forEach(function(event) {
				if(!event.classList.contains('wrapper-night')){
					event.classList.add('wrapper-night');
				}else{
					event.classList.remove('wrapper-night');
				}
			});


	  }

//Прокрутка до блока
const buttonBottom = document.querySelectorAll('a[href*=\'#\']');

for(let ancor of buttonBottom) {
	ancor.addEventListener('click', function(e) {
		e.preventDefault();
		const blockID = ancor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
};

//Scroll Top Bar
window.onscroll = function () {
	scrollBar();
	menuScroll();
};

function scrollBar() {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
		documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
		scrolled = (windowScroll / documentHeight) * 100;
		document.querySelector('.scroll-progres__line').style.width = scrolled + '%';
		document.querySelector('.scroll-progres__time').innerHTML = Math.trunc(scrolled) + '%';
};

//Button burger menu
window.onload = function() {

	let menuGambButton = document.querySelectorAll('.button-minmenu');

			menuGambButton.forEach(function(event) {

				event.onclick = activeMenuButton;

			});

	function activeMenuButton() {

			let buttonLine = document.querySelectorAll('.button-minmenu__line'),
					buttonLineArrey = [];

					buttonLine.forEach(function(event) {

						buttonLineArrey.push(event);

					});

					for(p = 0; p <= buttonLineArrey.length - 1; p++) {

						if(!buttonLineArrey[p].style.transform) {

							buttonLineArrey[0].style.cssText = "transform: translate3d(0, 10px, 0) rotate(45deg);";
							buttonLineArrey[1].style.cssText = "transform: scaleX(0);";
							buttonLineArrey[2].style.cssText = "transform: translate3d(0, -10px, 0) rotate(-45deg);";

							buttonLineArrey[3].style.cssText = "transform: translate3d(0, 10px, 0) rotate(45deg);";
							buttonLineArrey[4].style.cssText = "transform: scaleX(0);";
							buttonLineArrey[5].style.cssText = "transform: translate3d(0, -10px, 0) rotate(-45deg);";

							activeMenuList();

						} else {

							for(b = 0; b <= buttonLineArrey.length - 1; b++) {

									buttonLineArrey[b].style.cssText = null;

									closeMenuList();
								
							}

						}
						break;
					};
	};

function activeMenuList() {
	let menuGambList = document.querySelector('.nav-menu');
			menuGambList.classList.add('nav-menu__list-mobile');
};

function closeMenuList() {
	let menuGambList = document.querySelector('.nav-menu');
			menuGambList.classList.remove('nav-menu__list-mobile');
};

};




// Header menu scroll

function menuScroll() {

	menuCount(1, 20, 150, 15, 1);
		
};

function menuCount (countlogo, countWrap, countButton, countButtonFont, countButtonColor) {

	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
			documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			//Fixed object
			scrolColorWrap, scrolLogo, scrolLogoText, scrolButton, scrolColorButton, scrolTop,
			scrolObg = document.querySelectorAll('.scrol-fix'),
			//count
			countArrey = [scrolColorWrap, scrolLogo, scrolLogoText, scrolButton, scrolColorButton, scrolTop],
			obgArrey = []; 

			scrolObg.forEach(function(event) {
				obgArrey.push(event);
			});
			
			countArrey[0] = (windowScroll / countWrap) * 1;
			countArrey[1] = countlogo - (windowScroll / 9.9999999) ;
			countArrey[2] = countButtonFont - (windowScroll / 3.9) ;
			countArrey[3] = countButton - windowScroll;
			countArrey[4] = countButtonColor - (windowScroll / 9.9999999);


			if(countArrey[0] >= 1) {
				countArrey[0] = 1;
			}

			if(countArrey[1] <= .7) {
				countArrey[1] = .7;
			}

			if(countArrey[2] <= 12) {
				countArrey[2] = 12;
			}

			if(countArrey[3] <= 120) {
				countArrey[3] = 120;
			}

			if(countArrey[4] <= 0) {
				countArrey[4] = 0;
			}



			obgArrey[0].style.background = `rgba(195, 169, 116, ${countArrey[0].toFixed(1)})`;
			obgArrey[1].style.transform = `scale(${countArrey[1]})`;
			obgArrey[2].style.fontSize = `${countArrey[2]}px`;
			obgArrey[3].style.fontSize = `${countArrey[2]}px`;

	let headerButtonStyle = obgArrey[4].style;
			headerButtonStyle.width = `${countArrey[3]}px`;
			headerButtonStyle.fontSize = `${countArrey[2]}px`;
			headerButtonStyle.background = `rgba(233, 152, 116, ${countArrey[4].toFixed(1)})`;
			
};





























