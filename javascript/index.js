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