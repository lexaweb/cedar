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
  const swiperSlider = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
