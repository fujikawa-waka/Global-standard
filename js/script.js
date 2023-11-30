const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    autoplay: 1000,
  },
});

//ドロワーメニュー
$(".hamburger-buttons").click(function () {
  $("#js-hamburger").toggleClass('open');
  $(".c-drawer__nav").toggleClass('active');
});
$(".c-drawer__nav").click(function () {
  $(".hamburger-btn").removeClass('active');
  $("#g-nav").removeClass('active');
});

//スクロールボタン
$(function () {
  var pageTop = $('#js-page_top');
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
