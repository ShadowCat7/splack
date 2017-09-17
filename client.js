var engineFactory = require('./engine');

var entityFactory = require('./entity');

var canvas = null;
var fpsLabel = null;
var engine = null;

var entity = null;

function draw() {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fpsLabel.innerHTML = Math.round(engine.fps);

    entity.draw(ctx);
}

function update() {

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
});
