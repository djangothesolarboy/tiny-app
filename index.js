let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let currentApp = document.getElementsByClassName('app-name');
currentApp.innerHTML = apps[0];

const lightOn = () => {
    document.body.style.color = 'white';
    document.body.style.color = 'black';
    currentApp.style.color = 'darkblue';
}

const lightOff = () => {
    document.body.style.color = 'white';
    document.body.style.color = 'black';
    currentApp.style.color = 'blue';
}

const moveRight = () => {
    apps.push(apps.shift());
    return apps;
}

const moveLeft = () => {
    apps.push(apps.pop());
    return apps;
}

const right = () => {
    let caro = moveRight();
    currentApp.innerHTML = caro[0];
    if (caro[0] === 'grave') {
        lightOff();
    } else {
        lightOn();
    }
}

const left = () => {
    let caro = moveLeft();
    currentApp.innerHTML = caro[0];
    if (caro[0] === 'grave') {
        lightOff();
    } else {
        lightOn();
    }
}

