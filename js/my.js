$(document).ready(function() {
        DomainSlider();
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

// domain slider settings
function DomainSlider() {
    const slider_domain = new Siema({
        selector: '.domain_slider_box',
        duration: 200,
        easing: 'ease',
        perPage: {
            1600: 4, // 4 items for viewport wider than 1600px
            992: 3, // 3 items for viewport wider than 992px
            768: 3, // 1 items for viewport wider than 768px
            640: 1 // 1 items for viewport wider than 640px
        },
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: false
    });
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    prev.addEventListener('click', () => slider_domain.prev());
    next.addEventListener('click', () => slider_domain.next());
};

//
// CareersPageImgSlider SETTINGS
function CareersPageImgSlider() {
    const slider_domain = new Siema({
        selector: '.img-slider',
        duration: 200,
        easing: 'ease',
        perPage: {
            1600: 6, // 4 items for viewport wider than 1600px
            1280: 4,
            992: 3, // 3 items for viewport wider than 992px
            768: 2 // 1 items for viewport wider than 768px
        },
        startIndex: 0,
        draggable: true,
        threshold: 0,
        loop: false,
        onInit: () => {},
        onChange: () => {},
    });
};

//
// CareersPagefeaturesSlider SETTINGS
function CareersPagefeaturesSlider() {
    const slider_domain = new Siema({
        selector: '.slider-block',
        duration: 200,
        easing: 'ease',
        perPage: {
            1600: 4, // 4 items for viewport wider than 1600px
            1280: 3,
            992: 2, // 3 items for viewport wider than 992px
            768: 1 // 1 items for viewport wider than 768px
        },
        startIndex: 0,
        draggable: true,
        threshold: 0,
        loop: false,
    });
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    prev.addEventListener('click', () => slider_domain.prev());
    next.addEventListener('click', () => slider_domain.next());
};





});