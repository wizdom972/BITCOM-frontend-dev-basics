var MyMath = function (name) {
  console.log("MyObject called");

  this.name = name;
};

console.log("============[02.02] prototype 객체");
console.log("============[02.03] prototype.constructor");
console.log("============[02.04] prototype 객체 확장");
MyMath.prototype.add = function (a, b) {
  return a + b;
};
MyMath.prototype.PI = 3.14;

console.log(MyMath.prototype);

console.log(
  "============[03.03] MyMath 생성자 함수로 생성한 일반 객체의 __proto__ 객체"
);
var math = new MyMath("MyMath");
console.log(math.__proto__ === MyMath.prototype);

console.log(
  "============[03.04] 리터럴 {}로 정의한 일반 객체의 __proto__ 객체"
);
console.log("============[04.01] prototype 객체 속성 접근(상속)");

console.log("============[04.02] prototype 객체 속성 오버라이드");

console.log("============[04.03] 생성 객체만의 속성");

console.log("============[05.01] prototype 객체의 '__proto__' 속성 확인");
console.log(MyMath.prototype.__proto__ === Object.prototype);

console.log("============[05.02] Object.prototype 객체 속성 사용하기");
console.log(math.toString(), math.hasOwnProperty("add"));

math.toString = function () {
  return `[MyMath ${this.name}]`;
};

console.log(math.toString());

console.log("============[05.03] function 객체의 __proto__ 확인");
console.log(MyMath.__proto__ === Function.prototype);

console.log("============[06] Function.prototype 객체 속성 사용하기");
console.log(
  math.toString.apply({ name: "바꿔야징" }),
  math.add.call(null, 10, -20)
);
