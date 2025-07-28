let numberA = +prompt("nhập số a");
let numberB = +prompt("nhập số B");
let operator = prompt("Mời bạn nhập vào các phép tính (+, -, *, /");
let result
switch (operator){
    case "+":
        alert("kết quả là:" +(numberA + numberB));
        break;
    case "-":
        alert("kết quả là :" +(numberA - numberB));
        break;
    case "*":
        alert("kết quả là :"+ (numberA * numberB));
        break;
    case "/":
        alert("kết quả là :"+ (numbetA / numberB));
        break;
    default:
        alert("phép tình không thể thực hiện");
        break;
    
}