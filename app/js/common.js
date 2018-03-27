$( document ).ready(function() {

  var windowWidth;

  $("#menu-btn").click(function() {
    $(this).toggleClass( "active" );
    $('#menu-btn-close').toggleClass( "active" );

    if ($(window).width() <= 767) {
      $(this).removeClass( "active" );
      $('#menu-btn-close').removeClass( "active" );
      windowWidth = $( window ).width();
      $('.main-container').attr("id","");
      $('.pushy').width(windowWidth);
      $('.pushy-open-left .pushy').css({
          transform: "translate3d(0, 0, 0)"
      });
    } else {
      $('.main-container').attr("id","container");
      windowWidth = $( window ).width();
      $('.pushy').width(320);
      if ($("body").hasClass("pushy-open-left")) {
          $('.pushy-open-left .pushy').css({
              transform: "translate3d(0, 0, 0)"
          });
      }
    }
  });

  $("#menu-btn-close-pushy").click(function() {
    // get window width
    windowWidth = $(window).width();
    $('.pushy-left').css({
        transform: "translate3d(-"+windowWidth+"px, 0, 0)"
    });
  });

  $("#menu-btn-close").click(function() {
    $(this).toggleClass( "active" );
    $('#menu-btn').toggleClass( "active" );

    if ($(window).width() <= 767) {
      windowWidth = $( window ).width();
      $('.main-container').attr("id","");
      $('.pushy').width(windowWidth);
      $('.pushy-open-left .pushy').css({
          transform: "translate3d(0, 0, 0)"
      });
    } else {
      $('.main-container').attr("id","container");
      $('.pushy').width(320);
      $('.pushy-left').css({
          transform: "translate3d(-320px, 0, 0)"
      });
    }
  });

  // resize pushy
  // $( window ).resize(function() {
  //   windowWidth = $(window).width();
  //   console.log(windowWidth);
  //   if ($(window).width() <= 767) {
  //     console.log(windowWidth + "RESIZE");
  //     $('.main-container').attr("id","");
  //     if ($("body").hasClass("pushy-open-left")) {
  //       windowWidth = $( window ).width();
  //       $('.pushy').width(windowWidth);
  //     } else {
  //       windowWidth = $( window ).width();
  //       $('.pushy').width(320);
  //     }
  //     $("#menu-btn").click(function() {
  //       console.log("нажал!111");
  //       windowWidth = $( window ).width();
  //       $('.pushy').width(windowWidth);
  //       $('.pushy-open-left .pushy').css({
  //           transform: "translate3d(0, 0, 0)"
  //       });
  //     });
  //
  //     $("#menu-btn-close-pushy").click(function() {
  //       // get window width
  //       windowWidth = $( window ).width();
  //       $('.pushy-left').css({
  //           transform: "translate3d(-"+windowWidth+"px, 0, 0)"
  //       })
  //     });
  //   } else {
  //     console.log(windowWidth + " RESIZE");
  //     $('.pushy').width(320);
  //     $('.pushy-left').css({
  //         transform: "translate3d(-320px, 0, 0)"
  //     });
  //     $('.main-container').attr("id","container");
  //   }
  // });


  $( window ).resize(function() {
    $('body').removeClass('pushy-open-left');
    if ($(window).width() <= 767) {
      $('#menu-btn').removeClass( "active" );
      $('#menu-btn-close').removeClass( "active" );
      windowWidth = $( window ).width();
      $('.main-container').attr("id","");
      $('.pushy').width(windowWidth);
      $('.pushy-left').css({
          transform: "translate3d(-"+windowWidth+"px, 0, 0)"
      });
      if ($("body").hasClass("pushy-open-left")) {
          windowWidth = $( window ).width();
          $('.pushy').width(windowWidth);
          $('.pushy-open-left .pushy').css({
              transform: "translate3d(0, 0, 0)"
          });
          $('#menu-btn').removeClass( "active" );
      }
    } else {
      $('#menu-btn').removeClass( "active" );
      $('#menu-btn-close').removeClass( "active" );
      $('.main-container').attr("id","container");
      // $('#menu-btn-close').addClass( "active" );
      // $('#menu-btn').addClass( "active" );
      windowWidth = $( window ).width();
      $('.pushy').width(320);
      $('.pushy-left').css({
          transform: "translate3d(-320px, 0, 0)"
      })
      if ($("body").hasClass("pushy-open-left")) {
        $('.pushy-open-left .pushy').css({
            transform: "translate3d(0, 0, 0) !important"
        });
      }
    }

    // FANCY
    if ($(window).width() <= 767) {
      $('.popup').width($(window).width() - 50);
    }
  });



  /*---------------
      # FANCYBOX
  ---------------*/
  $('.fancybox-reqcall').fancybox({
    close : false,
    autoDimensions: false,
    fitToView: false,
    autoScale: false
  });

  $('.fancybox-gallery').fancybox();

  // gallery open plus
  $(".gallery-item__plus").click(function() {
    $(this).parent().find('.gallery-item__link').click();
  });


  /*---------------
      # VALIDATE
  ---------------*/
  $("#banner-form").validate({
    errorPlacement: function(error, element) {
      error.appendTo('.form__error');
    }
  });

  $("#feedback-form").validate({
    errorPlacement: function(error, element) {
      error.appendTo('.form__error');
    }
  });

  $("#popup-form").validate({
    errorPlacement: function(error, element) {
      error.appendTo('.form__error');
    }
  });

  $('#agree').click(function(){
    if($("#agree").is(':checked')) {
      $(this).parent().removeClass('invalid');
    }
  });

  $('#agree2').click(function(){
    if($("#agree2").is(':checked')) {
      $(this).parent().removeClass('invalid');
    }
  });

  $('#agree3').click(function(){
    if($("#agree3").is(':checked')) {
      $(this).parent().removeClass('invalid');
    }
  });

  /*---------------
      #MASKED INPUT
  ---------------*/
  $(".phone__field").mask("+7 999 999 99 99", { autoclear: false } );


  /*---------------
				# GALLERY
		---------------*/
  var swiperGallery = new Swiper('.swiper-gallery', {
  			slidesPerView: 6,
        pagination: {
          el: '.swiper-pagination',
        },
  			paginationClickable: true,
  			spaceBetween: 0,
  			loop: true,
  			slideToClickedSlide: true,
  			breakpoints: {
  				// when window width is <= 320px
  				320: {
  					slidesPerView: 1,
  					spaceBetween: 0
  				},
  				// when window width is <= 480px
  				480: {
  					slidesPerView: 1,
  					spaceBetween: 0
  				},
  				// when window width is <= 640px
  				767: {
  					slidesPerView: 1,
  					spaceBetween: 0
  				},
  				1199: {
  					slidesPerView: 1,
  					spaceBetween: 0
  				}
  			}
  	});


  /*---------------
      #SEND FORM
  ---------------*/
  $('#banner-form').submit(function(){
    if(!$("#agree").is(':checked')) {
        $("#agree").parent().addClass('invalid');
        return false;
    }
    return true;
    var msg   = $('#banner-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      dataType: 'json',
      success: function(data) {
        $('#results').html(data);
        $('.form-result').text('Успех! Форма отправлена.');
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
        $('.contacts-form-result').text('Ошибка! Форма не отправлена!');
      }
    });
  });

  $('#feedback-form').submit(function(){
    if(!$("#agree2").is(':checked')) {
        $("#agree2").parent().addClass('invalid');
        return false;
    }
    return true;
    var msg   = $('#feedback-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      dataType: 'json',
      success: function(data) {
        $('#results').html(data);
        $('.form-result').text('Успех! Форма отправлена.');
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
        $('.contacts-form-result').text('Ошибка! Форма не отправлена!');
      }
    });
  });

  $('#popup-form').submit(function(){
    if(!$("#agree3").is(':checked')) {
        $("#agree3").parent().addClass('invalid');
        return false;
    }
    return true;
    var msg   = $('#popup-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      dataType: 'json',
      success: function(data) {
        $('#results').html(data);
        $('.form-result').text('Успех! Форма отправлена.');
      },
      error:  function(xhr, str){
        console.log('Возникла ошибка: ' + xhr.responseCode);
        $('.contacts-form-result').text('Ошибка! Форма не отправлена!');
      }
    });
  });
});
