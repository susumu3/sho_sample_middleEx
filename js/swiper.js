let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true, // ループの指定
  effect: "fade", //フェードの指定
  autoplay: {
      delay: 4000, //４秒後に次のスライドへ
      disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
  },
  speed: 2000, //２秒かけてフェードで切り替わる
  allowTouchMove: false,//マウスでのスワイプを禁止
});