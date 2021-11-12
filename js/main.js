$(function(){
// スライドインヘッダー
  // falg変数のデフォルト値として「up」を指定    
  var flag = "up";
  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が「0」より大きい場合
    if ($(this).scrollTop() > 70) {
    // flag変数が「up」だった場合の処理
      if (flag === "up") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".si-header").stop().animate({
          // topの位置を「-80px」から「0」になるまでアニメーション
          top: 0
        // アニメーション時間を「500ms」に設定
        }, 500)
        // flag変数の値を「down」に変更
        flag = "down";
      }
    // scrollTop()が「0」の場合
    } else {
      // flag変数が「down」だった場合の処理
      if (flag === "down") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".si-header").stop().animate({
          // topの位置を「0」から「-80px」になるまでアニメーション
          top: "-80px"
        // アニメーション時間を「500ms」に設定
        }, 500);
        // flag変数の値を「up」に変更
        flag = "up";
      }
    }
  });

// モーダル
var scrollPosition;
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
      scrollPosition = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollPosition});
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      
      $('body').removeClass('is-drawerActive');
      $('.js-hamburger').attr('aria-expanded', false);
      $('#js-global-menu').attr('aria-hidden', true);

      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
      return false;
  });

// スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    //ヘッダーの高さを取得
    var header = $('header').outerHeight() - 20;
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

// ドローワーメニュー
  $('.js-hamburger').on('click', function(){
    $('body').toggleClass('is-drawerActive');
    scrollPosition = $(window).scrollTop();
      $('html').addClass('scroll-prevent').css({'top': -scrollPosition});

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('#js-global-menu').attr('aria-hidden', false);
    } else {
      $(this).attr('aria-expanded', false);
      $('#js-global-menu').attr('aria-hidden', true);
      $('html').removeClass('scroll-prevent').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
    }
  });
  $('#js-drawer-background, #js-global-menu__menu').on('click', function(){
    $('body').removeClass('is-drawerActive');
    $('.js-hamburger').attr('aria-expanded', false);
    $('#js-global-menu').attr('aria-hidden', true);
    $('html').removeClass('scroll-prevent').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
  });

  // アコーディオン
  // $('.jsAccordionTitle').on('click', function(){
  //   $(this).next().toggleClass('is-open')
  // });





  // お問い合わせフォーム
  // const $submitBtn = $('#js-submit')
  // $('#form input,#form textarea').on('change', function () {
  //   if (
  //     $('#form input[type="text"]').val() !== "" &&
  //     $('#form input[type="email"]').val() !== "" &&
  //     $('#form #privacyCheck').prop('checked') === true
  //   ) {
  //     $submitBtn.prop('disabled', false);

  //   } else {
  //     $submitBtn.prop('disabled', true);
  //   }
  // });

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdU7ToUeTOYLo7dHDFUB_xWK8jYaWYU0h0N-G-nfmNI3rsr8A/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          // $(".end-message").slideDown();
          // $(".submit-btn").fadeOut();
          window.location.href = "thanks.html";
        },
        // 200: function () {
        //   $(".false-message").slideDown();
        // }
      }
    });
    event.preventDefault();
  });

  // タブ
  $('.tab li').on('click', function(){
    // クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
    // クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active');
    // クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
    // コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.tabWrapper').removeClass('show').eq(index).addClass('show');
  });
});