let parentNumbers = document.getElementsByClassName("numbers")[0];
let print = document.getElementsByClassName("print")[0];

// Create number Buttons
for (let i = 9; i >= 0; i--) {
    let createSpanNum = document.createElement("span");
    createSpanNum.className = "number";
    createSpanNum.textContent = i;
    parentNumbers.appendChild(createSpanNum);
};

let numbers = document.querySelectorAll(".number");
let calc = document.querySelectorAll(".notion");
let assign = document.getElementsByClassName("assign")[0];

let spanResultOne = document.createElement("span");
spanResultOne.className = "result-one";
spanResultOne.style.cssText = `font-size: 12px;
color: #676161;`;

let mathElement = document.createElement("span");
mathElement.className = "math-element";

print.prepend(mathElement)
print.prepend(spanResultOne);
let spanResult = document.createElement("span");
spanResult.className = "result-now";
spanResult.innerHTML = "0";
print.appendChild(spanResult);

// Numbers 
let number = 0;
numbers.forEach((num) => {
    num.onclick = function () {
        
        if (number.toString().endsWith(".")) {
            if (!(num.innerText.trim() === ".")) {
                if (number === 0) {
                    number += +num.innerText.trim();
                }
                else {
                    number += num.innerText.trim();
                };
            };
        }
        else {
            if (number === 0) {
                number += +num.innerText.trim();
            }
            else {
                number += num.innerText.trim();
            };
        };

        

        if (isNaN(parseInt(number))) {
            number = num.innerText.trim();
        };
        spanResult.innerText = number;
    };
});

// Calcs
calc.forEach((e) => {
    e.onclick = function () {
        if (spanResultOne.innerHTML === "") {
            spanResultOne.innerText = number;
        }
        else {
            if (mathElement.innerHTML.trim() === "+") {
                spanResultOne.innerText = +spanResultOne.innerText + +number;
            }
            else if (mathElement.innerHTML.trim() === "-") {
                spanResultOne.innerText = +spanResultOne.innerText - +number;
            }
            else if (mathElement.innerHTML.trim() === "*") {
                if (number === 0) {
                    // number = "not valid"
                }
                else {
                    spanResultOne.innerText = +spanResultOne.innerText * +number;
                };
            }
            else if (mathElement.innerHTML.trim() === "/") {
                if (number === 0) {
                    // number = "not valid"
                }
                else {
                    spanResult.innerText = +spanResultOne.innerText / +number;
                };
            }
            else {
                spanResultOne.innerText = +spanResultOne.innerText % +number;
            };
        };
        mathElement.innerHTML = e.innerText;
        number = 0;
    };
});

// Assign Operator
assign.onclick = function () {
    if (spanResultOne.innerHTML !== "") {
        if (mathElement.innerHTML.trim() === "+") {
            spanResult.innerText = +spanResultOne.innerText + +number;
        }
        else if (mathElement.innerHTML.trim() === "-") {
            spanResult.innerText = +spanResultOne.innerText - +number;
        }
        else if (mathElement.innerHTML.trim() === "*") {
            spanResult.innerText = +spanResultOne.innerText * +number;
        }
        else if (mathElement.innerHTML.trim() === "/") {
            if (number === 0) {
                number = "لا يمكن القسمه علي صفر";
                spanResult.innerText = number;
            }
            else {
                spanResult.innerText = +spanResultOne.innerText / +number;
            };
        }
        else {
            spanResult.innerText = +spanResultOne.innerText % +number;
        };
        spanResultOne.innerHTML = "";
        mathElement.innerHTML = "";
        number = +spanResult.innerText;
    };
};

// Delete System
const delBtn = document.getElementsByClassName("delete")[0];

delBtn.onclick = function () {
    if (spanResult.innerHTML !== "") {
        if (isNaN(parseInt(number))) {
            spanResult.innerHTML = "";
            number = "";
        }
        else {
            spanResult.innerHTML = spanResult.innerHTML.slice(0, spanResult.innerHTML.length - 1);
            number = +number.toString().slice(0, number.toString().length - 1);
        };
    };
};