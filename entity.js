var physics = require('./physics');

function Entity(options) {
    var self = this;

    self.x = options.x;
    self.y = options.y;

    self.rect = physics.createRectangle({
        width: options.width,
        height: options.height,
    });

    self.causesCollisions = options.causesCollisions;

    self.type = options.type;

    self.update = options.update || function () {};

    self.draw = options.draw || function (ctx, viewX, viewY) {
        var path = new Path2D();
        path.moveTo(self.x, self.y);
        path.lineTo(self.x + self.rect.width, self.y);
        path.lineTo(self.x + self.rect.width, self.y + self.rect.height);
        path.lineTo(self.x, self.y + self.rect.height);

        ctx.fillStyle = '#ffffff';
        ctx.fill(path);

        console.log('drawed!');

        console.log('x: ' + self.x);
        console.log('y: ' + self.y);
        console.log('w: ' + self.rect.width);
        console.log('h: ' + self.rect.height);
    };
}

module.exports = {
    create: (options) => {
        return new Entity(options);
    },
};
