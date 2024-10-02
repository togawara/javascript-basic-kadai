// btnというidをもつHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// textというidをもつHTML要素を取得し、定数に代入
const text = document.getElementById('text');

// HTML要素がクリックされたときイベント処理を実行する
btn.addEventListener('click', () => {

  // 2秒の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
  
});