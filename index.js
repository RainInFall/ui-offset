function Offset(x, y) {
  if (!Offset.isOffset(this)) {
    return new Offset(x, y);
  }

  this._x = x;
  this._y = y;
}

Offset.isOffset = function(offset) {
  return offset instanceof Offset;
};

Offset.prototype.x = function() {
  return this._x;
};

Offset.prototype.y = function() {
  return this._y;
};

Offset.prototype.distance = function() {
  return Math.sqrt(this.distanceSqr());
};

Offset.prototype.distanceSqr = function() {
  return this.x()*this.x()+this.y()*this.y();
};

Offset.prototype.reverse = function() {
  return Offset(-this.x(), -this.y());
};

Offset.prototype.clone = function() {
  return Offset(this.x(), this.y());
};

Offset.equals = function(offset1, offset2) {
  return offset1.x() == offset2.x() && offset1.y() == offset2.y();
}

Offset.prototype.equals = function(another) {
  return Offset.equals(this, another);
};

Offset.moveup = function(y) {
  return Offset(0, -y);
};

Offset.movedown = function(y) {
  return Offset(0, y);
};

Offset.moveleft = function(x) {
  return Offset(-x, 0);
};

Offset.moveright = function(x) {
  return Offest(x, 0);
};

module.exports = Offset;
