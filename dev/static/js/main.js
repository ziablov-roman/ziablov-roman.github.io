;
// Начинать писать отсюда!!!!
$(document).ready(function(){
    //Фильтер в хедере
    $('.header-filter,.filter-close').click(function(){
        $('.products-all__filter,.header-filter,.filter-close,.product-view__filter,.index__filter').toggleClass('active');
    });

    //Слайдер на главной стпранице
    $('.js-index-slider').bxSlider({
        pagerCustom: '.js-index-slider__pager',
        controls: false
    });
    //Слайдер продукта
    $('.js-product-item__slider').bxSlider({
       pagerCustom: '.product-item__color',
        controls: false
    });
   // Слайдер страницы продукты
    $('.js-product-view__slider').bxSlider({
        pagerCustom: '.js-product-view__pager',
        controls: false
    });


    $('.sizes-list li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
});