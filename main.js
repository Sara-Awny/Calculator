let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); 

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        
        if (buttonText == '=') {
            try {
                string = calculate(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if(buttonText == 'AC') {
            string = "";
            input.value = string;
        }
        else if(buttonText == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(buttonText == '%') {
            if (string !== "") {
                string = (parseFloat(string)/100).toString();
                input.value = string;
            }
        }
        else {
            string += buttonText;
            input.value = string;
        }
    });
});
function calculate(str) {
    return new Function('return ' + str)();
}