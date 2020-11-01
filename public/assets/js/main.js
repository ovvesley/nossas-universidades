$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/logo.svg");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== Sidebar

    $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').addClass('open');
    });

    $('[href="#close"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').removeClass('open');
    });


    //===== Slick

    $('.slider-items-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });


        $('.menuNO.portfolio-menu ul ').on('click', 'li', async function () {
            var filterValue = $(this).attr('data-filter');
            let norteRow = document.getElementById("universidadeRowNorte");
            norteRow.innerHTML = "";
            console.log(filterValue)


            let universidades = await getUniversidade(0)
            console.log(universidades)

            universidades.filter(val => filterValue === "NO" ? true : val.UF === filterValue).forEach(uni => {
                var card = createCardUniversidade(uni.UF, uni.nome)
                norteRow.appendChild(card)

            })
        })

        $('.menuND.portfolio-menu ul ').on('click', 'li', async function () {
            var filterValue = $(this).attr('data-filter');
            let nordesteRow = document.getElementById("universidadeRowNordeste");
            nordesteRow.innerHTML = "";
            console.log(filterValue)


            let universidades = await getUniversidade(1)
            console.log(universidades)

            universidades.filter(val => filterValue === "ND" ? true : val.UF === filterValue).forEach(uni => {
                var card = createCardUniversidade(uni.UF, uni.nome)
                nordesteRow.appendChild(card)

            })
        })


        // filter items on button click
        $('.menuCO.portfolio-menu ul ').on('click', 'li', async function () {
            var filterValue = $(this).attr('data-filter');
            let centroOesteRow = document.getElementById("universidadeRowCentroOeste");
            centroOesteRow.innerHTML = "";
            console.log(filterValue)


            let universidades = await getUniversidade(2)
            console.log(universidades)

            universidades.filter(val => filterValue === "CO" ? true : val.UF === filterValue).forEach(uni => {
                var card = createCardUniversidade(uni.UF, uni.nome)
                centroOesteRow.appendChild(card)

            })
        })

        $('.menuSD.portfolio-menu ul ').on('click', 'li', async function () {
            var filterValue = $(this).attr('data-filter');
            let sudesteRow = document.getElementById("universidadeRowSudeste");
            sudesteRow.innerHTML = "";
            console.log(filterValue)


            let universidades = await getUniversidade(3)
            console.log(universidades)

            universidades.filter(val => filterValue === "SD" ? true : val.UF === filterValue).forEach(uni => {
                var card = createCardUniversidade(uni.UF, uni.nome)
                sudesteRow.appendChild(card)
            })
        })

        $('.menuSU.portfolio-menu ul ').on('click', 'li', async function () {
            var filterValue = $(this).attr('data-filter');
            let sulRow = document.getElementById("universidadeRowSul");
            sulRow.innerHTML = "";
            console.log(filterValue)


            let universidades = await getUniversidade(4)
            console.log(universidades)

            universidades.filter(val => filterValue === "SU" ? true : val.UF === filterValue).forEach(uni => {
                var card = createCardUniversidade(uni.UF, uni.nome)
                sulRow.appendChild(card)
            })
        })





    });

    //for menu active class
    $('.portfolio-menu ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
});


//===== slick Testimonial Four

$('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
});


//====== Magnific Popup

$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
});


//===== Magnific Popup

$('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});


//===== Back to top

// Show or hide the sticky footer button
$(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200)
    } else {
        $('.back-to-top').fadeOut(200)
    }
});


//Animate the scroll to yop
$('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});


    //===== 












