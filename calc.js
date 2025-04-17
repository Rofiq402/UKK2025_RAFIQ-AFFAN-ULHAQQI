// script.js

let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);  // menghitung ekspresi
    } catch (e) {
        display.value = 'Error';  // menampilkan pesan error jika ada masalah
    }
}
