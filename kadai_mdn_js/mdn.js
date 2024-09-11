// 本日のデータを抽出し、todayに格納
const today = new Date();
console.log(today);

// 年データを抽出し、yearに格納
const year = today.getFullYear();
console.log(year);

// 月データを抽出し、monthに格納
const month = today.getMonth() + 1;
console.log(month);

// 日データを抽出し、dayに格納
const day = today.getDate();
console.log(day);

// 表示
console.log( year + '年' + month + '月' + day + '日' );

