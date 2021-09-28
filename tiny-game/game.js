// initial state of game
px = py = 10;
gs = ts = 20;
ax = ay = 15;
xv = yv = 0;

body = []; // { x: px, y: py }
segments = 5;

// game logic
const game = () => {
    px += xv;
    py += yv;

    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#8fdfff';
    
    if (px < 0) px = ts - 1;
    if (px > ts) px = 0;
    if (py < 0) py = ts - 1;
    if (py > ts - 1) py = 0;

    for (let i = 0; i < body.length; i++) {
        context.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2);
        if (body[i].x === px && body[i].y === py) segments = 5;
    }

    body.push({ x: px, y: py });

    while (body.length > segments) body.shift();

    // eating
    if (ax === px && ay === py) {
        segments++;
        ax = Math.floor(Math.random() * ts);
        ay = Math.floor(Math.random() * ts);
    }

    context.fillStyle = '#8fdf2f';
    context.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

    document.getElementById('score').innerHTML = `Score: ${segments}`;
    // document.getElementById('high-score').innerHTML = `Highscore: ${segments}`;

    // console.log(segments)
}


// controls
const keyDown = e => {
    // let left = (65, 37);
    // console.log(e.keyCode);
    switch(e.keyCode) {
        case(65): //37
            xv = -1;
            yv = 0;
            break;
        case(87): // 38
            xv = 0;
            yv = -1;
            break;
        case(68): // 39
            xv = 1;
            yv = 0;
            break;
        case(83): // 40
            xv = 0;
            yv = 1;
            break;
    }
}

const init = () => {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    document.addEventListener('keydown', keyDown);
    setInterval(game, 1000/15);
}

// change game interval to chance speed/difficulty
// count segments for score

// window.onload = init();

document.addEventListener('DOMContentLoaded', init);