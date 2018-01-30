$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    navText:["<img src='img/left.png'>","<img src='img/right.png'>"],
    navClass:['owl-prev','owl-next'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})
// var say=$(".static").find("h2").html();
// $(".static").click(function(){

// for (var i = 0; i < 2500; i++) {
    
//     $(say).text(i);
    
// console.log(say);
// }
// })

  new WOW().init();

// var numbers = $(".static").find(".happy-clients")
// $(numbers).animateNumber(
//   {
//     number: 2500,
//     easing: 'easeInQuad',
//   },
//   2000
// );
// var numbers1 = $(".static").find(".coffe")
// $(numbers1).animateNumber(
//   {
//     number: 300,
//     easing: 'easeInQuad',
//   },
//   2000
// );
// var numbers2 = $(".static").find(".bara")
// $(numbers2).animateNumber(
//   {
//     number: 120,
//     easing: 'easeInQuad',
//   },
//   2000
// );
// var numbers3 = $(".static").find(".str")
// $(numbers3).animateNumber(
//   {
//     number: 30,
//     easing: 'easeInQuad',
//   },
//   2000
// );







// $(window)

// $("html, body").animate({ scrollTop: sections[index].offset().top }, "slow");



// Home About Servises Barbers Testimonials Portfolio Prices Contact
var navs = [$(".h_home"),$(".h_about"), $(".h_services"), $(".h_barber"), $(".h_test"), $(".h_portfolio"),$(".h_price"),$(".h_contact")];
var sections = [$("#home"),$("#about"), $("#services"),  $("#barber"), $("#clients"), $("#gallery"), $("#price"),$("#appointment"),];
navs.forEach(function(el, index) {
    $(el).click(function(){
        i=0;
            $("#burger-con_i").removeClass("open");
            $("#mobile").css('display','none');                                  
        
        $("html, body").animate({ scrollTop: sections[index].offset().top }, "slow");
        return false;  
    });
}, this);
})

i=0;
    $("#burger-con_i").on('click', function(){
        i++;
        console.log(i);
        if(i%2==0){
            $("#burger-con_i").removeClass("open"); 
            $("#mobile").css('display','none');                      
        }
        else{
            $("#burger-con_i").addClass("open");  
            $("#mobile").css('display','block');
        }
        // $(this).toggleClass("open");
    });





