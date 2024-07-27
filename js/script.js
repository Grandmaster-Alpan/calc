const calc = document.querySelector('.calc');
const textCont = document.querySelector('.calc__contact');

let atri = ['-', '+', '/', '*'];

let num1 = '';
let num2 = '';
let sign = '';

window.onclick = (event) => {
    let nameKey = event.target.dataset.num;
    let nameSign = event.target.dataset.sign;
   if(event.target.classList.contains('calc__buttons-numbers__number')) {
        if(num2 == '' && sign == '') {
            num1 += Number(nameKey);
            textCont.innerHTML = `<span>${num1}</span>`;
            console.log(num1)
        }else if (!num1 == '' && !sign == '') {
            num2 += Number(nameKey);
            textCont.innerHTML += `<span>${num2}</span>`;
            console.log(num2);
        }
    }
    if(event.target.classList.contains('calc__buttons-signs__sign')) {
        if(atri.includes(nameSign)){
            sign = nameSign;
            textCont.innerHTML += `<span>${sign}</span>`;
            console.log(sign);
        }
        
        if(nameSign == '=') {
           switch (sign) {
               case '+':
                    num1 = (+num1) + (+num2);
                    textCont.innerHTML += `<span>${'='+ num1}</span>`;
                   break;
                case '/':
                    num1 = num1 / num2;
                    textCont.innerHTML += `<span>${'='+ num1}</span>`;
                break;
                case '*':
                    num1 = num1 * num2;
                    textCont.innerHTML += `<span>${'='+ num1}</span>`;
                break;
                case '-':
                    num1 = num1 - num2;
                    textCont.innerHTML += `<span>${'='+ num1}</span>`;
                break;
               default:
                   break;
           }
        }
    }

    if(event.target.dataset.sign == 'delet'){
        clearAll();
    }
}


function clearAll() {
    num1 = '';
    num2 = '';
    sign = '';
    textCont.innerHTML = `<span>${0}</span>`;
}