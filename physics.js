
function Rectangle(options) {
    var self = this;
    self.height = options.height;
    self.width = options.width;
}

function isInside(x1, y1, rect2, x2, y2) {
    return x1 >= x2 && x1 <= x2 + rect2.width && y1 >= y2 && y1 <= y2 + rect2.height;
}

function isColliding(rect1, x1, y1, rect2, x2, y2) {
    if (isInside(x1, y1, rect2, x2, y2))
        return true;

    if (isInside(x1 + rect1.width, y1, rect2, x2, y2))
        return true;

    if (isInside(x1, y1 + rect1.height, rect2, x2, y2))
        return true;

    if (isInside(x1 + rect1.width, y1 + rect1.height, rect2, x2, y2))
        return true;

    return false;
}

module.exports = {
    createRectangle: (options) => {
        return new Rectangle(options);
    },
    isColliding: isColliding,
};
