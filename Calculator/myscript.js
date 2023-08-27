document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9.+\-*/%]/.test(key)) {
        calcNumbers(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevent the default behavior of "=" key
        performCalculation();
    } else if (key === 'Backspace') {
        document.querySelector('.area').value = '';
    }
});

function performCalculation() {
    try {
        const result = eval(document.querySelector('.area').value);
        document.querySelector('.area').value = result;
    } catch (error) {
        document.querySelector('.area').value = 'Error';
    }
}

var time = document.getElementById('time').innerHTML;
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
time = document.write(time);

function calcNumbers(result) {
    document.querySelector('.area').value += result;
}

function percentage(result) {
    var result1 = String(result);
    if (result1.includes("%")) {
        var a, b, percent;
        var splitWord = [];
        a = Number(splitWord[0]);
        b = Number(splitWord[1]);
        percent = (a / 100 * b);
        document.querySelector('.area').value = percent;
    }
}

function makeNegative(result) {
    if (result.charAt(0) == '_') {
        document.querySelector('.area').value = result.replace('-', '');
    } else {
        document.querySelector('.area').value = '-' + result;
    }
}