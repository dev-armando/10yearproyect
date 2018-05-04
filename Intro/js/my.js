$(document).ready(function() {
    $(document).on("scroll", function(){
var dato1 = sessionStorage.getItem('Login'); 

if (dato1 == "AbrirLogin") {
    abrirlogin();
}
        if ($(document).scrollTop() > 100) {
            $('#ir_inicio').removeClass('inicio').addClass('inicio_scroll');
            $('#cabeza').removeClass('cabecero').addClass('cabecero2');
            $('#menu').addClass('menu2');       
            $('.linka').addClass('scrlm');        
            $("#logop").attr("src","images/logob.png");

        }
        else{
            $('#ir_inicio').addClass('inicio').removeClass('inicio_scroll');
            $('#cabeza').addClass('cabecero').removeClass('cabecero2');        
            $('#menu').removeClass('menu2');        
            $('.linka').removeClass('scrlm');   
            $("#logop").attr("src","images/logon.png");
          }

    });

$(".fancybox").fancybox();
    $('.ir_a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top-75
        }, 1000);
    });
if($(window).width()<= 780){
    $('#menumob').removeClass('oculto');
    $('#menun').addClass('oculto');
}
else{
    $('#menumob').addClass('oculto');
    $('#menun').removeClass('oculto');
}

(function($) {
  $(function() {
        $("#scroller").simplyScroll();
        speed:1000
  });
 })(jQuery);

});
