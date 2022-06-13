//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
//add smooth scroll for all browsers to website, alternative of scroll-behavior: smooth;
$('a[href*="#"]')
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
   ) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       event.preventDefault();
       $('html, body').animate({
         //scroll speed
         scrollTop: target.offset().top
       }, 1000, function() {
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) {
           return false;
         } else {
           $target.attr('tabindex','-1'); 
           $target.focus();
         };
       });
     }
   }
 });
