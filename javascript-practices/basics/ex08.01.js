console.log("============[01.01] 배열생성: 내장객체(생성자함수) 사용");
console.log("============[01.02] 배열생성: 리터럴 사용");
var a4 = [];
console.log(typeof a4, a4 instanceof Array, a4.length);

// 배열의 요소의 타입은 동일하지 않아도 된다.
var a5 = [
    1,
    "2",
    true,
    { name: "MyName" },
    [1, 2, 3],
    function () {
        console.log("Hello");
    },
];

a5[5]();

console.log("============[01.03] 배열순회");
for (var i = 0; i < a5.length; i++) {
    console.log(a5[i]);
}

console.log("============[01.04] Array vs Object");

console.log("============[01.05] for ~ in: 객체");

console.log("============[01.05] for ~ in: 배열");
