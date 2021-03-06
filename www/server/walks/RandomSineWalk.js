
RandomSineWalk = function(options) {
  this.name = "random-sine";

  var nextStep = 0;

  this.position = options.position || 0;

  this.setPosition = function(pos, velocity) {
    this.position = pos;
    nextStep = 0;
  };

  this.step = function() {
    if (nextStep == 0) {
      this.curFromBound = this.position;
      this.curToBound = Utils.random(options.minPosition, options.maxPosition);
    }
    var prevPosition = this.position;
    this.position = Utils.interpolate(
        -Math.cos(Math.PI * (nextStep / options.halfPeriod)),
        -1, 1,
        this.curFromBound, this.curToBound
    );

    this.velocity = this.position - prevPosition;

    nextStep = (nextStep + 1) % options.halfPeriod;
    return this.position;
  };

};

ShiftingWalk.call(RandomSineWalk.prototype);
