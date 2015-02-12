function baseA() {
  this.member = "baseA member";
  this.showSelfA = function() {
    alert(this.member);
  }
}
function baseB() {
  this.member = "baseB member";
  this.showSelfB = function() {
    alert(this.member);
  }
}
function extendAB() {
  baseA.call(this);
  baseB.call(this);
}
var extend = new extendAB();
extend.showSelfA();
extend.showSelfB();
