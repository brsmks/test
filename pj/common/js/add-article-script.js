// この関数を呼び出すことで、指定されたURLのスクリプトを読み込みます
function loadScript(url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;

	// スクリプトが読み込まれた後にコールバックを実行します
	script.onload = function () {
		if (callback) {
			callback();
		}
	};

	// ドキュメントのhead要素にスクリプトを追加します
	document.head.appendChild(script);
}

// この関数を呼び出すことで、指定されたURLのCSSを読み込みます
function loadCSS(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;

	// ドキュメントのhead要素にCSSを追加します
	document.head.appendChild(link);
}

// Slick Carouselを初期化する関数
function initializeSlick() {
	$(document).ready(function () {
		$(".slider-contents-auto").slick({
			autoplaySpeed: 3000,
			autoplay: true,
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
		});
		$(".slider-contents-fadeauto").slick({
			autoplaySpeed: 3000,
			autoplay: true,
			dots: false,
			fade: true,
			infinite: true,
			speed: 1500,
		});
		$(".slider-contents-arrow").slick({
			autoplaySpeed: 3000,
			autoplay: true,
			arrow: true,
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			arrows: true,
		});
		$(".slider-contents-fuwafuwa").slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 1000,
			fade: true,
			cssEase: "linear",
			autoplay: true,
			autoplaySpeed: 2500,
		});
		$(".slider-250108beauty").slick({
			autoplaySpeed: 2000,
			autoplay: true,
			arrow: true,
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			centerMode: true,
			centerPadding: "10%",
		});
		$(".slider-250219pjapparel").slick({
			autoplay: true,
			autoplaySpeed: 0,
			speed: 2000,
			cssEase: "linear",
			infinite: true,
			arrows: false,
			dots: false,
			variableWidth: true,
		});
		$("#beauty_251126 .review__slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			adaptiveHeight: true
		});
		$(".slider-auto-side-scrolling").slick({
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3000,
			cssEase: "linear",
			infinite: true,
			arrows: false,
			dots: false,
			variableWidth: true,
				responsive: [{
				breakpoint: 767,
				settings: {
					speed: 2000,
				}
			}]
		});
		$(".slider-speed-slow").slick({
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3500,
			cssEase: "linear",
			infinite: true,
			arrows: false,
			dots: false,
			variableWidth: true,
		});			
	});
}

// Slick CarouselのCSSファイルを読み込む
loadCSS(
	"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
);
loadCSS(
	"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
);

// Slick Carouselのスクリプトを読み込む
loadScript(
	"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
	function () {
		console.log("Slick Carousel loaded");
		initializeSlick(); // Slick Carouselの初期化を行う
	}
);

function loadScriptsSequentially(urls, callback) {
	if (urls.length === 0) {
		if (callback) callback();
		return;
	}
	$.getScript(urls[0])
		.done(function () {
			console.log(`Loaded: ${urls[0]}`);
			loadScriptsSequentially(urls.slice(1), callback);
		})
		.fail(function (jqxhr, settings, exception) {
			console.error(`Error loading: ${urls[0]}`);
		});
}

// 読み込むライブラリのURLリスト
const libraryUrls = [
	"./scrollreveal.js",
];

// 全てのライブラリが読み込まれた後に実行する初期化関数
function initializeApplication() {
	console.log("All libraries loaded, initializing application...");
	// ScrollRevealの初期化
	ScrollReveal().reveal(".scroll-animate-in", {
		duration: 800, // アニメーションの完了にかかる時間
		viewFactor: 0.4, // 0~1,どれくらい見えたら実行するか
	});
    ScrollReveal().reveal(".scroll-animate-up", {
		delay: 0, // アニメーション開始までの時間		
		duration: 2000, // アニメーション完了にかかる時間
		origin: 'bottom', // 要素がどの方向から来るか
		distance: '40%', // 移動する距離	
    });		
}

// ライブラリを順次読み込む
loadScriptsSequentially(libraryUrls, initializeApplication);

// テキストをクリックでコピー
function copyButton(elementId) {
	// 指定したIDの要素のテキストを取得
	var element = document.getElementById(elementId);

	// テキストをクリップボードにコピー
	navigator.clipboard.writeText(element.textContent);
}


// テキストをクリックでコピー＆通知表示
function copyButtonNotice(elementId, btn) {
	var element = document.getElementById(elementId);
	if (!element) return;

	var notice = btn.nextElementSibling;
	if (!notice || !notice.classList.contains('copy-notice')) return;

	navigator.clipboard.writeText(element.textContent)
	.then(function () {
	notice.textContent = 'コピーしました';
	notice.classList.add('is-visible');

	setTimeout(function () {
	notice.classList.remove('is-visible');
	}, 1500);
	});
}

// 追従ボタン（途中で表示、途中で消える）「デリケートゾーンケア」で使用

$(window).on("load", function () {
	$(function ($) {
		let scrollTop = 0;
		let target = $("#js-floating");
		let displayStart = $("#js-floating-start").offset().top;
		let displayEnd = $("#js-floating-end").offset().top;

		$(window).scroll(function () {
			scrollTop = $(this).scrollTop();

			if (displayStart < scrollTop && scrollTop < displayEnd) {
				$(target).removeClass("is-hidden");
			} else {
				$(target).addClass("is-hidden");
			}
		});
	});
});

// モーダル
const mediaQueryList = window.matchMedia("(min-width: 768px)");
const listener = (event) => {
	// リサイズ時に行う処理
	if (event.matches) {
		// 768px以上
		$(".modal-open01").on("click", function () {
			$(".u-modal01").addClass("is-active");
		});
		$(".modal-open02").on("click", function () {
			$(".u-modal02").addClass("is-active");
		});
		$(".modal-open03").on("click", function () {
			$(".u-modal03").addClass("is-active");
		});
		$(".modal-open04").on("click", function () {
			$(".u-modal04").addClass("is-active");
		});
		$(".modal-open05").on("click", function () {
			$(".u-modal05").addClass("is-active");
		});
		$(".modal-open06").on("click", function () {
			$(".u-modal06").addClass("is-active");
		});
		$(".modal-open07").on("click", function () {
			$(".u-modal07").addClass("is-active");
		});
    $(".modal-open08").on("click", function () {
			$(".u-modal08").addClass("is-active");
		});
    $(".modal-open09").on("click", function () {
			$(".u-modal09").addClass("is-active");
		});
    $(".modal-open10").on("click", function () {
			$(".u-modal10").addClass("is-active");
		});
		$(".modal-close01").on("click", function () {
			$(".u-modal01").removeClass("is-active");
		});
		$(".modal-close02").on("click", function () {
			$(".u-modal02").removeClass("is-active");
		});
		$(".modal-close03").on("click", function () {
			$(".u-modal03").removeClass("is-active");
		});
		$(".modal-close04").on("click", function () {
			$(".u-modal04").removeClass("is-active");
		});
		$(".modal-close05").on("click", function () {
			$(".u-modal05").removeClass("is-active");
		});
		$(".modal-close06").on("click", function () {
			$(".u-modal06").removeClass("is-active");
		});
		$(".modal-close07").on("click", function () {
			$(".u-modal07").removeClass("is-active");
		});
    $(".modal-close08").on("click", function () {
			$(".u-modal08").removeClass("is-active");
		});
    $(".modal-close09").on("click", function () {
			$(".u-modal09").removeClass("is-active");
		});
    $(".modal-close10").on("click", function () {
			$(".u-modal10").removeClass("is-active");
		});
		console.log("PC用ブレークポイント用処理");
	} else {
		// 768px未満
		$(".modal-open01").on("click", function () {
			$(".u-modal01").addClass("is-active");
		});
		$(".modal-open02").on("click", function () {
			$(".u-modal02").addClass("is-active");
		});
		$(".modal-open03").on("click", function () {
			$(".u-modal03").addClass("is-active");
		});
		$(".modal-open04").on("click", function () {
			$(".u-modal04").addClass("is-active");
		});
		$(".modal-open05").on("click", function () {
			$(".u-modal05").addClass("is-active");
		});
		$(".modal-open06").on("click", function () {
			$(".u-modal06").addClass("is-active");
		});
		$(".modal-open07").on("click", function () {
			$(".u-modal07").addClass("is-active");
		});
    $(".modal-open08").on("click", function () {
			$(".u-modal08").addClass("is-active");
		});
    $(".modal-open09").on("click", function () {
			$(".u-modal09").addClass("is-active");
		});
    $(".modal-open10").on("click", function () {
			$(".u-modal10").addClass("is-active");
		});
		$(".modal-close").on("click", function () {
			$(".modal").removeClass("is-active");
		});
		$(".modal-open01").on("click", function () {
			$(".u-modal02, .u-modal03").removeClass("is-active");
		});
		$(".modal-open02").on("click", function () {
			$(".u-modal01, .u-modal03").removeClass("is-active");
		});
		$(".modal-open03").on("click", function () {
			$(".u-modal01, .u-modal02").removeClass("is-active");
		});
		$(".modal-open04").on("click", function () {
			$(".u-modal05").removeClass("is-active");
		});
		$(".modal-open05").on("click", function () {
			$(".u-modal04").removeClass("is-active");
		});
		$(".modal-open06").on("click", function () {
			$(".u-modal07").removeClass("is-active");
		});
		$(".modal-open07").on("click", function () {
			$(".u-modal06").removeClass("is-active");
		});
		console.log("SP用ブレークポイント用処理");
	}
};
mediaQueryList.addEventListener("change", listener);
listener(mediaQueryList);


$(function () {
	$('.modal-open').on('click', function (e) {
	  e.preventDefault();
	  var target = $(this).data('target');
	  $('#' + target).addClass('active');
	});
  
	$('.modal-close').on('click', function () {
	  $(this).closest('.modal-container').removeClass('active');
	});
  
	$(document).on('click', function (e) {
	  $('.modal-container.active').each(function () {
		if (!$(e.target).closest('.modal-body').length && !$(e.target).hasClass('modal-open')) {
		  $(this).removeClass('active');
		}
	  });
	});
  });


  
window.addEventListener('load', function () {
	const wrapper = document.getElementById('renewal-contents');
	const contentSection = document.querySelector('#all_btn_fixed');
	if (!wrapper || !contentSection) return;

// 初期スタイル設定
	Object.assign(contentSection.style, {
		position: 'fixed',
		left: 'calc(50% + 375px + -50px)',
		width: '50px',
		zIndex: '99',
		opacity: '0',
		transition: 'opacity 0.5s ease',
		pointerEvents: 'none', // 初期は無効
	});

	window.addEventListener('scroll', () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;

		const wrapperRect = wrapper.getBoundingClientRect();
		const wrapperTop = scrollTop + wrapperRect.top;
		const wrapperBottom = wrapperTop + wrapper.offsetHeight;

		const fadeInStart = wrapperTop;
		const fadeOutStart = wrapperBottom - windowHeight;

		const isVisible = scrollTop >= fadeInStart && scrollTop <= fadeOutStart;

		contentSection.style.opacity = isVisible ? '1' : '0';
		contentSection.style.pointerEvents = isVisible ? 'auto' : 'none';
	});
});