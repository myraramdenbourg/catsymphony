document.getElementById('date').innerHTML = new Date().toDateString();

// var audio = new Audio();
// audio.src = './audio/TomCat-Mar_Smith-2055290520.mp3';
// audio.load();
// audio.play();


// var resizeHandle = document.getElementById('handle');
// var draggable1 = document.getElementById('draggable1');
// resizeHandle.addEventListener('mousedown', initialiseResize, false);
//
// function initialiseResize(e) {
//     window.addEventListener('mousemove', startResizing, false);
//     window.addEventListener('mouseup', stopResizing, false);
// }
//
// function startResizing(e) {
//     draggable1.style.width = (e.clientX - draggable1.offsetLeft) + 'px';
//     draggable1.style.height = (e.clientY - draggable1.offsetTop) + 'px';
// }
// function stopResizing(e) {
//     window.removeEventListener('mousemove', startResizing, false);
//     window.removeEventListener('mouseup', stopResizing, false);
// }

function playSound1(){
    const sound = document.getElementById("audio1");
    sound.play();
}

function playSound2() {
    const sound = document.getElementById("audio2");
    sound.play();
}

function playSound3() {
    var sound = document.getElementById("audio3");
    sound.play();
}

function playSound4() {
    var sound = document.getElementById("audio3");
    sound.play();
}

function playSound5() {
    var sound = document.getElementById("audio5");
    sound.play();
}

function playSound6() {
    var sound = document.getElementById("audio6");
    sound.play();
}

function playSound7() {
    var sound = document.getElementById("audio7");
    sound.play();
}

function playSound8() {
    var sound = document.getElementById("audio8");
    sound.play();
}

function playSound9() {
    var sound = document.getElementById("audio9");
    sound.play();
}

function playSound10() {
    var sound = document.getElementById("audio10");
    sound.play();
}

$(function() {
    $( "#draggable1" ).draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
    $( "#draggable4" ).draggable();
    $( "#draggable5" ).draggable();
    $( "#draggable6" ).draggable();
    $( "#draggable7" ).draggable();
    $( "#draggable8" ).draggable();
    $( "#draggable9" ).draggable();
    $( "#draggable10" ).draggable();
});