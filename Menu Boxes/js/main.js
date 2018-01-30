$(document).ready(function() {

  $('.products-cat').hide();
  $('.shop-cat').hide();
  $('.community-cat').hide();
  $('.support-cat').hide();

  $('.menu  #products').click (function()  {
    $('.menu  #products').toggleClass('highlight');
    $('.products-cat').fadeToggle(10);
    $('.shop-cat').hide();
    $('.community-cat').hide();
    $('.support-cat').hide();
  })

  $('.menu  #shop').click (function()  {
    $('.menu  #shop').toggleClass('highlight');
    $('.shop-cat').fadeToggle(10);
    $('.products-cat').hide();
    $('.community-cat').hide();
    $('.support-cat').hide();
  })

  $('.menu  #community').click (function()  {
    $('.menu  #community').toggleClass('highlight');
    $('.community-cat').fadeToggle(10);
    $('.products-cat').hide();
    $('.shop-cat').hide();
    $('.support-cat').hide();
  })

  $('.menu  #support').click (function()  {
    $('.menu  #support').toggleClass('highlight');
    $('.support-cat').fadeToggle(10);
    $('.products-cat').hide();
    $('.shop-cat').hide();
    $('.community-cat').hide();
  })

});
