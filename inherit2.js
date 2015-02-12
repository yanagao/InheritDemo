// 子对象可以覆盖或重载父对象的属性或方法
var Person = {name:"zhangsan",age:"26",sex:"female"}; 
var zhangsan = {sex:"male"}; 
(function inlineExtends(so,po) { 
  for (var i in po) {
　　so[i] = po[i]; 
　} 
})(zhangsan,Person); 
alert(zhangsan.sex);   // female

// 改进
var Person = {name:"zhangsan",age:"26",sex:"female"}; 
var zhangsan = {sex:"male"}; 
(function inlineExtends(so,po) { 
  for (var i in po) { 
    if (so[i])    // 使子对象不会覆盖父对象属性
　　　continue; 
　　so[i] = po[i]; 
　} 
})(zhangsan,Person); 
alert(zhangsan.sex);   // male
