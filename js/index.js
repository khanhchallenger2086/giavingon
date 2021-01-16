$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

  
    $('.autoplay-related').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });



    // var scrollTop = $('#scroll_top');
    var menu = $('.header-bottom');
    var header = $('.header');

    var position = $(window).scrollTop(); 

  //   $(window).scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     if(scroll > position) {
	// 		  header.css("top", "16px");
	// 		  header.css("position", "fixed");
  //     } else {
	// 		  header.css("top", "0px");
  //     }
  //     position = scroll;
  // });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			menu.css("top", "0px");
      menu.css("padding-top", "5px");
			menu.css("transition", "0.5s");
			$(".logo img").css("width", "50px");
		} else {
      menu.css("top", "50px");
      menu.css("padding-top", "25px");
			menu.css("transition", "none");
      $(".logo img").css("width", "59px");
		}
	})

	// scrollTop.click(function(){
	// 	$("html, body").animate({scrollTop: 0}, 100);
  // })
  
  $(".icon-menu").click(() =>{
    toggle_menu();
    toggle_bg();
  });

  $(".close-menu").click(() => {
      toggle_menu();
      toggle_bg();
  });

  $(".bg-opacity").click(() => {
      toggle_menu();
      toggle_bg();
  });

  $(".icon-close-filter").click(() => {
      toggle_filter();
  });

  $(".filter").click(() => {
      toggle_filter();
  });

  if($(window).width() < 992) {
    $(".dropdown").click(function(e){
        e.preventDefault();
        $(this).find(".dropdown-content").slideToggle();
    });
}
});

function toggle_menu() {
  $(".menu").toggleClass('dp-transform');
}

function toggle_bg() {
  $(".bg-opacity").toggleClass('bg-opacity-block');
}

function toggle_filter() {
  $(".tab_links").toggleClass('bg-opacity-block');
}