'use strict'
$('#hamburger').on('click', function () {
  $('#icon').toggleClass('close');
  $('.sm').slideToggle();
});

const img_src = [
  "img/img_slide2.png",
  "img/img_slide4.png",
  "img/img_slide5.png",
  "img/img_slide6.png",
  "img/img_slide7.png",
  "img/slide1.jpg",
  "img/slide8.png"
];
let num = 0;
function slide_time() {
  // console.log('こんにちわ')
  console.log(img_src[num])
  document.getElementById("slide_img").src = img_src[num];

  if (num === 5) {
    num = 0;
  } else {
    num++;
  }

}
setInterval(slide_time, 1500);

const menu_btn = document.getElementById('hamburger');
let menu_open = false;
menu_btn.onclick = function () {
  if (!menu_open) {
    document.getElementById('icon').src = "img/close.png";
    document.getElementById('nav').style.display = 'block';
    menu_open = true;
  } else {
    document.getElementById('icon').src = "img/menu.png";
    document.getElementById('nav').style.display = 'none';
    menu_open = false;
  }
}

let page = 1;
const PAGE_MAX = 9; //画像が9枚だから
const MOVE = -200; //1枚の画像のwidthが200pxだから。

$(function () {
  $('#next').on('click', function () {
    let m = -200 + MOVE + 'px';
    $('#img-group').animate({ marginLeft: m }, 1000, function () {
      img_first_delete();
    });
  })


  const img_first_delete = function () {
    const $e = $('.img:first-child');
    $('.img:first-child').remove();
    $('#img-group').append($e);//append 終わりにおく
    $('#img-group').css('margin-left', '-200px');
  }
  $('#prev').on('click', function () {
    let m = +200 + MOVE + 'px';
    $('#img-group').animate({ marginLeft: m }, 1000, function () {
      img_last_delete();
    });
  })


  const img_last_delete = function () {
    const $e = $('.img:last-child');
    $('.img:last-child').remove();
    $('#img-group').prepend($e);// prepend頭のおく
    $('#img-group').css('margin-left', '-200px');
  }
});

