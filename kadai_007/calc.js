
// 変数numに1～1001までの数字を入れる
let num = Math.floor(Math.random() * 1000 ) + 1;

// 変数numの値を確認のために出力する
console.log(num);

// ３かつ５の倍数の場合の処理を最初に行う
if ( ((num % 3 ) === 0 ) && (( num % 5 ) === 0 )) {
  console.log('3と5の倍数です');
}
else if (( num % 3 ) === 0 ) {
  console.log('3の倍数です');
} 
else if (( num % 5 ) === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}

