'use strict'

$(function () {

  // datepicker表示イベント
  $('#date').pickadate();

  // timepicker表示イベント
  $('#time').pickatime({
    formatsubmit: 'HH:i', // 24時間表記
  });

  // 予約ボタン押下イベント
  $('#submit').click(onClickSubmit);

  //予約ボタン押下処理
  function onClickSubmit() {
    $('#submit_result').remove();
    var date = $('#date').val();
    var time = $('#time').val();

    if (date != '' && time != '') {


      //予約完了メッセージ
      $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>' + date + time + '〜</strong><br>予約受け付けました。</p></div>');

    } else {
      //予約失敗メッセージ
      $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');
    }
  }

});