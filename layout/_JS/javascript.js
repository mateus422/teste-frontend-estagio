
jQuery(document).ready(function($) { 
    $(".link").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
   });
});