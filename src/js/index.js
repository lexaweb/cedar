import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@fancyapps/fancybox'
import Inputmask from 'inputmask'
import noUiSlider from 'nouislider'
import 'parsleyjs'
import 'select2'
import Swiper from 'swiper/bundle'
import 'tooltipster'
import './_backend'

$(function () {
  sidebarInit()
  sliderInit()
  select()
  slideractiveInit()
  count()
})

function sidebarInit() {
  $('.sidebar-item').on('click', function () {
    $(this).addClass('active');
    $('.sidebar-item')
      .not(this)
      .removeClass('active');
  });
}

function select() {
  $('.select').on('click', function () {
    $(this).toggleClass('is-active')
  })
  $('.select__item').on('click', function () {
    $(this).parent().siblings('.select__header').find('.select__current').empty()
    var $select__current = $(this).parent().siblings('.select__header').find('.select__current')
    $(this).clone().appendTo($select__current)
    $($select__current).find('.select__item > img').unwrap(this)
  })
}

function sliderInit() {
  if ($('.filter-decor-slider').length > 0) {
  const swiperSlider = new Swiper('.filter-decor-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
        }
      }
    })
  }
  const swiperSlider = new Swiper('.filter-listing-slider', {
    slidesPerView: 1.5,
    loop: true,
  })
}

function slideractiveInit() {
  $('.filter-decor-slider-item').on('click', function () {
    $(this).addClass('active');
    $('.filter-decor-slider-item')
      .not(this)
      .removeClass('active');
  });
}

function count() {
  $('.minus').on('click', function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').on('click', function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
}
