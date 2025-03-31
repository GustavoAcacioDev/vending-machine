let isDispensing = false;

function tryInsertMoney(value) {
    if (isDispensing) {
        return;
    }

    const message = document.createElement('div');
    message.className = 'value-message';
    message.textContent = `R$ ${value} inserted`;
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.removeChild(message);
    }, 2000);
}

function tryDispenseCandy(color, type, price) {
    if (isDispensing) {
        return;
    }

    isDispensing = true;
    disableButtons();

    dispenseCandy(color, type, price);

    setTimeout(() => {
        isDispensing = false;
        enableButtons();
    }, 2000);
}

function disableButtons() {
    const buttons = document.querySelectorAll('.button, .candy-button');
    buttons.forEach(button => {
        button.classList.add('disabled');
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('.button, .candy-button');
    buttons.forEach(button => {
        button.classList.remove('disabled');
    });
}

function dispenseCandy(color, type, price) {
    const tray = document.getElementById('tray');

    const existingCandy = tray.querySelector('.dispensed-candy');
    if (existingCandy) {
        tray.removeChild(existingCandy);
    }

    const candy = document.createElement('div');
    candy.className = `dispensed-candy ${color}`;

    let darkColor;
    switch (color) {
        case 'pink': darkColor = '#d44d7a'; break;
        case 'blue': darkColor = '#2980b9'; break;
        case 'green': darkColor = '#27ae60'; break;
        case 'yellow': darkColor = '#d4ac0d'; break;
        case 'purple': darkColor = '#8e44ad'; break;
        case 'orange': darkColor = '#d35400'; break;
        default: darkColor = '#d44d7a';
    }

    candy.style.background = `radial-gradient(circle at 30% 30%, var(--candy-${color}), ${darkColor})`;

    tray.appendChild(candy);

    const message = document.createElement('div');
    message.className = 'value-message';
    message.textContent = `Type ${type} candy (R$ ${price}) dispensed`;
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.removeChild(message);
    }, 2000);
}