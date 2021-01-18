$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
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


    $('.slider-item-product').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
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


  // của videos
  $(".list-img-item p").mouseover(function(){
    $(this).find('.bg-img').fadeIn();
  });

  $(".list-img-item p").mouseleave(function() {
    $(this).find('.bg-img').fadeOut('fast');
  });

  $(".list-img-item p").click(function(){
    var link_img = $(this).find('img').attr('src');
    $('.popup-img-inner img').attr('src',link_img);
    $('.popup-img').toggleClass('popup-img-dp');
  });

  $(".close-popup-img").click(function(){
    $('.popup-img-inner img').attr('src','');
    $('.popup-img').toggleClass('popup-img-dp');
  });
// end của videos

// của detail-product
  $(".slick-slide img").click(function(){
    $(".main-img img").attr('src',$(this).attr('src'))
  });
// end của detail-product

    // var scrollTop = $('#scroll_top');
    var menu = $('.header-bottom');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			menu.css("top", "0px");
      menu.css("padding", "5px 0px");
			menu.css("transition", "0.5s");
			menu.css("backgroundColor", "white");
			$(".logo img").css("width", "59px");
		} else {
      menu.css("top", "50px");
      menu.css("padding", "25px 0px");
      menu.css("transition", "none");
			menu.css("backgroundColor", "transparent");
      $(".logo img").css("width", "70px");
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