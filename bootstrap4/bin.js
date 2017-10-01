$(document).on('click', '.navbar-brand', function() {
    $(".nav.navbar-nav").slideToggle();
 });

 $(document).on('click', '.nav-item', function() {
    $(".nav-item").removeClass('active');
   $(this).toggleClass('active');
 });


 $(document).on('click', '.btn', function() {
  
   $("h1").toggleClass('active');
    
 });