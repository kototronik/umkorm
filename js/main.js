/*  ---------------------------------------------------
    Template Name: Sona
    Description: Sona Hotel Html Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Offcanvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
   $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Date Picker
	--------------------*/
    $(".date-input").datepicker({
        minDate: 0,
        dateFormat: 'dd MM, yy'
    });

    /*------------------
		Nice Select
	--------------------*/
    document.addEventListener('DOMContentLoaded', () => {
        $("select").niceSelect();
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const close = document.querySelector('.close');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        
        // Массив изображений и текущий индекс
        const images = document.querySelectorAll('.gallery-item img');
        let currentIndex = 0;
    
        // Координаты для свайпа
        let touchStartX = 0;
        let touchEndX = 0;
    
        // Обработчик начала касания
        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        });
    
        // Обработчик завершения касания
        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        });
    
        // Логика обработки свайпа
        function handleGesture() {
            const swipeThreshold = 50; // Минимальное расстояние для распознавания свайпа
            const swipeDistance = touchEndX - touchStartX;
    
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    // Свайп вправо — предыдущее изображение
                    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                } else {
                    // Свайп влево — следующее изображение
                    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                }
                lightboxImg.src = images[currentIndex].src;
            }
        }
    
        // Открытие Lightbox с выбранным изображением
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                currentIndex = index;
            });
        });
    
        // Закрытие Lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
        }
    
        close.addEventListener('click', closeLightbox);
    
        // Закрытие при клике на фоне
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    
        // Функция для показа предыдущего изображения
        prev.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            lightboxImg.src = images[currentIndex].src;
        });
    
        // Функция для показа следующего изображения
        next.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            lightboxImg.src = images[currentIndex].src;
        });
    
        // Управление клавиатурой
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                    lightboxImg.src = images[currentIndex].src;
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                    lightboxImg.src = images[currentIndex].src;
                }
            }
        });
    });
    
    
})(jQuery);