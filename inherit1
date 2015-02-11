// 原型链继承
function Parent(){} 
function Child(){} 
Child.prototype = new Parent(); 
Child.prototype.constructor = Child;  // 保留实例child原有的对象构造信息
var child = new Child(); 
alert(child.constructor);     // function Parent(){} 
alert(child instanceof Child);     // true 
