var engineFactory = require('./engine');

var entityFactory = require('./entity');
var playerFactory = require('./player');

var canvas = null;
var fpsLabel = null;
var engine = null;

var entity = null;
var player = null;

function draw() {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fpsLabel.innerHTML = Math.round(engine.fps);

    player.draw(ctx);
}

function update(buttonsPressed, elapsedTime) {
    var controls = {};

    console.log(buttonsPressed);

    if (buttonsPressed[87] || buttonsPressed[188]) {
        controls.moveUp = true;
    }

    if (buttonsPressed[83] || buttonsPressed[79]) {
        controls.moveDown = true;
    }

    if (buttonsPressed[65]) {
        controls.moveLeft = true;
    }

    if (buttonsPressed[68] || buttonsPressed[69]) {
        controls.moveRight = true;
    }

    player.update(controls, elapsedTime);
}

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('game');
    fpsLabel = document.getElementById('fps');

    engine = engineFactory.create(canvas, update, draw);
    engine.start();

    entity = entityFactory.create({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    });

    player = playerFactory.create({
        x: 0,
        y: 0,
    });
});
