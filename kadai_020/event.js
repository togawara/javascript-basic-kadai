// btnというidをもつHTML要素を取得し、定数に代入
const output = document.getElementById('btn');

// textというidをもつHTML要素を取得し、定数に代入
const text = document.getElementById('text');

// HTML要素がクリックされたときイベント処理を実行する
output.addEventListener('click', () => {

  text.textContent = 'ボタンをクリックしました';
  
 
})