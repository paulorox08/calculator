const current = document.querySelector("#current");
const memory = document.querySelector('#memory');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');

const clear = document.querySelector('#clear');
const deleteLastChar = document.querySelector('#delete');

const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

const execute = document.querySelector('#equal');

// function disableBtns() {
//     add.disabled = true;
//     subtract.disabled = true;
//     multiply.disabled = true;
//     divide.disabled = true;
// }

// disableBtns()

function enableBtns() {
    add.disabled = false;
    subtract.disabled = false;
    multiply.disabled = false;
    divide.disabled = false;
}


function printScreen() {
    
    one.addEventListener('click', () => {
        memory.append('1')
        enableBtns()
    });
    two.addEventListener('click', () => {
        memory.append('2');
        enableBtns()
    })
    three.addEventListener('click', () => {
        memory.append('3');
        enableBtns()
    })
    four.addEventListener('click', () => {
        memory.append('4');
        enableBtns()
    })
    five.addEventListener('click', () => {
        memory.append('5');
        enableBtns()
    })
    six.addEventListener('click', () => {
        memory.append('6');
        enableBtns()
    })
    seven.addEventListener('click', () => {
        memory.append('7');
        enableBtns()
    })
    eight.addEventListener('click', () => {
        memory.append('8');
        enableBtns()
    })
    nine.addEventListener('click', () => {
        memory.append('9');
        enableBtns()
    })
    zero.addEventListener('click', () => {
        memory.append('0');
        enableBtns()
    })
    decimal.addEventListener('click', ()=>{
        memory.append('.')
        decimal.disabled = true;
    })
}

printScreen()

function deleteChar() {
    deleteLastChar.addEventListener('click', () => {
        const newText =  memory.textContent.slice(0, -1)
        memory.textContent = ''
        memory.append(newText)
        decimal.disabled = false
    })
};

deleteChar()

function clearScreen() {
    clear.addEventListener('click', () => {
        current.textContent = '';
        memory.textContent = '';
        decimal.disabled = false
    });
}

clearScreen()

function operators() {
    add.addEventListener('click', () => {
        memory.append(' + ');
        decimal.disabled = false
    })
    multiply.addEventListener('click', () => {
        memory.append(' * ')
        decimal.disabled = false
    })
    subtract.addEventListener('click', () => {
        memory.append(' - ');
        decimal.disabled = false
    })
    divide.addEventListener('click', () => {
        memory.append(' / ');
        decimal.disabled = false
    })
}

operators()

function clearCurrent() {
    current.textContent = ''
}

function clearMemory() {
    memory.textContent = ''
}


// function answer() {
//     execute.addEventListener('click', () => {
//         console.log(memory.textContent.split(' '))
//         let a = memory.textContent.split(' ')[0]
//         let numA = parseInt(a)
//         let b = current.textContent
//         let numB = parseInt(b)
//         let newSum = numA + numB
//         memory.textContent = numA + ' + ' + numB + ' = '
//         current.textContent = ''
//         current.append(newSum)
//     })
// }

// answer()


// function answerSum() {
//     memory.append(current.textContent)
//     let a = memory.textContent.split(' ')[0]
//     let numA = parseInt(a)

//     let b = memory.textContent.split(' ')[2]
//     let numB = parseInt(b)

//     let newSum = numA + numB
//     memory.textContent = numA + ' + ' + numB + ' = '
//     current.textContent = ''
//     current.append(newSum)
// }

// function something() {
//     let memorySplit = memory.textContent.split(' ')
//     if (memorySplit.length == 4) {
//         let a = memory.textContent.split(' ')[0]
//         let numA = parseInt(a)

//         let b = memory.textContent.split(' ')[2]
//         let numB = parseInt(b)
//         let newSum = numA + numB
//         memory.textContent = numA + ' + ' + numB + ' = '
//         current.textContent = ''
//         current.append(newSum)

//     }
// }

function execution() {
    execute.addEventListener('click', () => {
        let answer = eval(memory.textContent);
        current.textContent = Math.round((answer + Number.EPSILON) * 100) / 100;
    });
}

execution()