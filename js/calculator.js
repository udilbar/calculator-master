function Calculator(x, y) {
  this.x = Number(x);
  this.y = Number(y);
}

Calculator.prototype.difference = function () {
  return this.x - this.y;
}

Calculator.prototype.product = function () {
  return this.x * this.y;
}

Calculator.prototype.setX = function (x) {
  return this.x = x;
}

Calculator.prototype.setY = function (y) {
  return this.y = y;
}

Calculator.prototype.division = function () {
  return this.x / this.y;
}

Calculator.prototype.addition = function () {
  return this.x + this.y;
}

Calculator.prototype.module = function () {
  return this.x % this.y;
}

Calculator.prototype.power = function () {
  return this.x ** this.y;
}
