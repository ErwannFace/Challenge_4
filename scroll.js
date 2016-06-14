$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#change');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").addClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand").addClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand:hover").addClass('scroll');
          $(".navbar-default .nav > li > a").addClass('scroll');
          $(".navbar-default .nav > li > a:hover").addClass('scroll');
       } else {
          $(".navbar-default").removeClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand").removeClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand:hover").removeClass('scroll');
          $(".navbar-default .nav > li > a").removeClass('scroll');
          $(".navbar-default .nav > li > a:hover").removeClass('scroll');
       }
   });
    }
});