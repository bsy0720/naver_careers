$(function(){


/**
 * 
 * @헤더마우스호버
 */
$('.gnb .gnb-item').hover(function(){
  if($(this).find('.sub-list').length){
    $('.header').toggleClass('on');
    $(this).find('.sub-list').toggleClass('on');
  }
})


/**
 * @모바일사이드_메뉴
 */
$('.btn-menu').click(function(){
  $(this).toggleClass('on');
  $('.side-nav').toggleClass('show')
})

$('.side-nav .nav-item .arrow').click(function(e){
  e.preventDefault();
  $(this).toggleClass('on')
  $('.side-nav .sub-list').toggleClass('show');
})

$('').click(function(){
  $(this).addClass('active');
})




/**
 * @메인슬라이드
 */
const mainSlide = new Swiper('.sc-slide .swiper', {
  loop:true,
  simulateTouch:false,
   autoplay:{
     delay:5000,
     disableOnInteraction: false
   }
});



$('.sc-search select').change(function(){
  $(this).css('color','#000')
})


/**
 * @피플슬라이드
 * 
 */
const peopleSlide = new Swiper('.sc-people .swiper',{
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl:'.next',
    prevEl:'.prev',
  },
  breakpoints:{
    768:{
      slidesPerView: 1.1,
    }
  }
});

/**
 * @베네피트슬라이트
 */

const benefitSlide = new Swiper('.sc-benefits .swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl:'.next',
    prevEl:'.prev',
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    }
  }
});


/**
 * @풋터관련사이트
 */
$('.site-now').click(function(){
  $(this).toggleClass('active')
  if ($(this).hasClass('active')) {
    $('.relate-list').show()
  } else {
    $('.relate-list').hide()
  }
})


/**
 * @모바일셀렉트
 */
$('.mb-search .search-wrap').click(function(){
  $('.chk-wrap').addClass('on');
})
$('.btn-close').click(function(){
  $('.chk-wrap').removeClass('on');
})

/**
 * @전체선택
 */
$('#techAll').click(function(){
  if($(this).prop('checked')){
    $('.tech').prop('checked', true)
  }else
  $('.tech').prop('checked', false)
})

$('#designAll').click(function(){
  if($(this).prop('checked')){
    $('.design').prop('checked', true)
  }else
  $('.design').prop('checked', false)
})
$('#serviceAll').click(function(){
 if($(this).prop('checked')){
  $('.service').prop('checked', true)
}else
$('.service').prop('checked', false)
})
$('#corporAll').click(function(){
  if($(this).prop('checked')){
    $('.corpor').prop('checked', true)
  }else
  $('.corpor').prop('checked', false)
})


$('.filter-list .btn-item').click(function(){
  if ($(this).hasClass('on')) {
    $(this).siblings('.sub-list').removeClass('on');
    $(this).removeClass('on');
  } else {
    $(this).addClass('on');
    $(this).siblings('.sub-list').addClass('on');
  }
})
$('.filter-list .btn-sub').click(function(){
  if ($(this).hasClass('on')) {
    $(this).siblings('.item-list').removeClass('on')
    $(this).removeClass('on')
  } else {
    $(this).addClass('on');
    $(this).siblings('.item-list').addClass('on');
  }
})

/**
 * @선택클리어
 */
$('.filter-box .btn-clear').click(function(){
  $('.filter-box input[type=checkbox]').prop('checked', false)
})


}) // 지우지 말기