// These 4 series of functions display the page based on which function is called
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");

step1.style.display = 'grid';
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
step5.style.display = 'none';

function nextPage1() {
    step1.style.display = 'none';
    step2.style.display = 'grid';
}
function backPage1() {
    step1.style.display = 'grid';
    step2.style.display = 'none';
}

function nextPage2() {
    step2.style.display = 'none';
    step3.style.display = 'grid';
}
function backPage2() {
    step1.style.display = 'none';
    step2.style.display = 'grid';
    step3.style.display = 'none';
}

function nextPage3() {
    step3.style.display = 'none';
    step4.style.display = 'grid';
}
function backPage3() {
    step3.style.display = 'grid';
    step4.style.display = 'none';
}

function nextPage4() {
    step4.style.display = 'none';
    step5.style.display = 'grid';
}

function backPage4() {
    step4.style.display = 'grid';
    step5.style.display = 'none';
}


