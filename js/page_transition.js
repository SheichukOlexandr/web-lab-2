// Плавна поява контейнера під час завантаження сторінки
$(".main-container").animate({opacity: 1}, 400);
$(".main-1").animate({opacity: 1}, 400);
$(".main-2").animate({opacity: 1}, 500);
$(".main-3").animate({opacity: 1}, 600);
$(".header-animate").animate({opacity: 1}, 300);
$(".h1-animate").animate({opacity: 1}, 300);
$(".h2-animate").animate({opacity: 1}, 300);
$(".product-image").animate({opacity: 1}, 500);

// Оброблювач події при кліку миші на елементі меню
$(".horizontal-menu li a").on("click", function(event) {
    event.preventDefault();

    // Отримуємо URL нової сторінки
    let url = $(this).attr("href");

    // Плавне зникнення основного контейнера
    $(".main-container, .header-animate, .h1-animate, .main-1, .main-2, .main-3, .h2-animate, .product-image").animate({opacity: 0}, 400, function() {
        // Затримка перед переходом 
        setTimeout(function() {
            // Переход по новому URL
            window.location.href = url;
        }, 400); // 400 мілісекунд (0.4 секунди) - значення має відповідати часу анімації в CSS
    });
});
