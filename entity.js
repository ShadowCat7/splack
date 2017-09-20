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

    if (options.update) {
        self.update = function (controls, elapsedTime) {
            options.update(self, controls, elapsedTime);
        };
    } else {
        self.update = function () {};
    }

    if (options.draw) {
        self.draw = function (ctx, viewX, viewY) {
            options.draw(self, ctx, viewX, viewY);
        };
    } else {
        self.draw = function (ctx, viewX, viewY) {
            var path = new Path2D();
            path.moveTo(self.x, self.y);
            path.lineTo(self.x + self.rect.width, self.y);
            path.lineTo(self.x + self.rect.width, self.y + self.rect.height);
            path.lineTo(self.x, self.y + self.rect.height);

            ctx.fillStyle = '#ffffff';
            ctx.fill(path);
        };
    }
}

module.exports = {
    create: (options) => {
        return new Entity(options);
    },
};
