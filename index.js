let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let currentApp = document.querySelector('.app-name-name');
currentApp.innerHTML = apps[0];

const lightOn = () => {
    document.body.style.color = '#7f7f7f';
    document.body.style.backgroundColor = 'white'; 
    currentApp.style.color = '#8fdfff'; // blue
}

const lightOff = () => {
    document.body.style.color = '#f7f7f7';
    document.body.style.backgroundColor = '#545454'; // darker gray
    currentApp.style.color = '#ab84d8'; // purple
}

const moveRight = () => {
    apps.push(apps.shift());
    return apps;
}

const moveLeft = () => {
    apps.unshift(apps.pop());
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

document.querySelector('button-right').onclick = right;
document.querySelector('button-left').onclick = left;
