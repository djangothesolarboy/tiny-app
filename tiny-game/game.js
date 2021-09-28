// initial state of game
px = py = 10;
gs = ts = 20;
ax = ay = 15;
xv = yv = 0;

body = [];
segments = 5;

// game logic
const game = () => {
    px += xv;
    py += yv;

    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#8fdfff';
}


// controls
const keyDown = e => {
    console.log(e.keyCode);
    switch(e.keyCode) {
        case(65): //37
            console.log('left');
            break;
        case(87): // 38
            console.log('up');
            break;
        case(68): // 39
            console.log('right');
            break;
        case(83): // 40
            console.log('down');
            break;
    }
}

const init = () => {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    document.addEventListener('keydown', keyDown);
    setInterval(game, 1000/15);
    // alert('working');
}

// window.onload = init();

document.addEventListener('DOMContentLoaded', init);