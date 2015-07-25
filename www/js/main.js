$(document).ready(function(){
	$('a').ready(function(e){
		return false;
	})

	// этот обработчик ловит ширину изображения в продукте и сбрасывает её при поворотах экрана
	$(window).resize(function(){
		$('.item-page_image img').removeAttr('style')
	})
	$(window).resize();
	
	// ловим размер картинки и окошка с инфой
	$('.header__show-sidebar').click(function(){
		var h = $('.item-page_image img').width()
		var ht = $ ('.item-page_info').width()
		$('.item-page_image img').width(h)

		$('.item-page_info').width(ht)

	})

	// выезжалка для сайдбара
	$('.header__show-sidebar').click(function(){
		$('.sidebar').toggleClass('sidebar-show')
		$('.container').toggleClass('container-slide')
		$('.header__cart').toggleClass('header__cart-hide')
		$('.header').toggleClass('header-open')
	})

	// менюшка аккордеон
	$('.content__menu_item-parent > a').click(function(e){
		if(!$(this).hasClass('active')){
			$('.content__menu_item-parent > a').removeClass('active').next('ul').slideUp();
			$(this).addClass('active');
			$(this).next('ul').slideDown(400)
		} else {
			$(this).removeClass('active').next('ul').slideUp();
		}
		return false;
	});

	// иницализация перестроения блоков на главной (masonry.pkgd.js)
    $('.catalog').masonry({
      itemSelector: '.catalog__item',
          singleMode: false,
      isResizable: true,
      isAnimated: true,
          animationOptions: { 
          queue: false, 
          duration: 400 
      }
    })

    // переключалка вида блоков на главной
    $('.check-style_link-lines').click(function(){
    	$(this).addClass('check-style_link-active')
    	$('.check-style_link-block').removeClass('check-style_link-active')
    	$('.catalog__item').addClass('catalog__item-lines')
    	$('.catalog__item').removeClass('catalog__item-block')
    	$('.catalog').removeAttr('style')
    	$('.catalog__item').removeAttr('style')

    })
    $('.check-style_link-block').click(function(){
    	$(this).addClass('check-style_link-active')
    	$('.check-style_link-lines').removeClass('check-style_link-active')
    	$('.catalog__item').addClass('catalog__item-block')
    	$('.catalog__item').removeClass('catalog__item-lines')
    })

    // считалка количества в оформлении
    $('.item-page_calculation_plus').click(function () {
		var $input = $(this).parent().find('input.item-page_calculation_total');
		var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
				return false;
	});
	$('.item-page_calculation_minus').click(function () {
		var $input = $(this).parent().find('input.item-page_calculation_total');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
                return false;
	});

    // считалка количества в оформлении (в корзине)
    $('.product-calc_minus').click(function () {
		var $input = $(this).parent().find('input.product-calc_total');
		var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
				return false;
	});
	$('.product-calc_plus').click(function () {
		var $input = $(this).parent().find('input.product-calc_total');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
                return false;
	});


	// разворачивалка в корзине товаров
	$('.cart__item').click(function(){
		// $('.cart__item').find('.product-calc').hide()
		$(this).children('.product-calc').toggleClass('product-calc-show')

	})

	// подтверждение заказа (всплывающее окно)
	$('.cart .button').click(function(){
		$('.overlay').toggleClass('overlay-show')
		$('.confirm').toggleClass('confirm-show')
	})
	$('.confirm .button').click(function(){
		$('.confirm').toggleClass('confirm-show')
		$('.overlay').toggleClass('overlay-show')
	})
	$('.overlay').click(function(){
		$(this).toggleClass('overlay-show')
		$('.confirm').toggleClass('confirm-show')
	})
})