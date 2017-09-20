var entityFactory = require('./entity');

module.exports = {
    create: (options) => {
        options.width = 200;
        options.height = 200;
        options.causesCollisions = true;
        options.type = 'player';

        options.update = function (self, controls, elapsedTime) {
            if (controls.moveUp) {
                self.y -= elapsedTime * 200;
            }
            if (controls.moveDown) {
                self.y += elapsedTime * 200;
            }
            if (controls.moveLeft) {
                self.x -= elapsedTime * 200;
            }
            if (controls.moveRight) {
                self.x += elapsedTime * 200;
            }

            console.log('x: '+self.x);
            console.log('y: '+self.y);
        };

        options.draw = null;

        return entityFactory.create(options);
    },
};
