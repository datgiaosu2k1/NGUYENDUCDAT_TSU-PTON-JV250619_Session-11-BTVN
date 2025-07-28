let width =  +prompt("nhập chiều cao của bạn");
let height = +prompt(" nhập cân nặng của bạn");
let bmi = height / ( width * width);
if (bmi < 18.5){
    alert(" bạn bị thiếu cân");
}else if ( bmi <24,9){
    alert (" bạn bình thường");
}else if ( nmi < 29.9){
    alert(" tiền béo phì ( thừa cân )");
}else if (bmi <34,9){
    alert(" béo phì cấp độ 1");
}else if (bmi < 39.9){
    alert("béo phì cấp đọ 2");
}else {
    alert(" béo phì cấp độ 3");
}
