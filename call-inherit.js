// call继承
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
function extendAB() {   // 用extendAB继承baseA和baseB
  baseA.call(this);
  baseB.call(this);
}
var extend = new extendAB();
extend.showSelfA();  // baseB member
extend.showSelfB();  // baseB member
