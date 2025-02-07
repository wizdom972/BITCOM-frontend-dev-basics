console.log("===[Test: Unnamed Export Module]"); // Unnamed Export Module Import 에서은 반드시 이름을 지정해야 한다.
import myFunction from "./mods/ex01.mjs";
console.log(myFunction(10, 20));

import myObject from "./mods/ex02.mjs";
console.log(myObject.sub(10, 20));

console.log("===[Test: Named Export Module I]"); // Named Export 모듈의 다수 객체 Destrcting Import
import { add, sub } from "./mods/ex03.mjs";
console.log(add(10, 20));
console.log(sub(10, 20));

console.log("===[Test: Named Export Module II]"); // Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
import * as m from "./mods/ex03.mjs";
console.log(m.add(10, 20));
console.log(m.sub(10, 20));

console.log("===[Test: Named + Unamed Export Module]");
import math, { add as add2, sub as sub2 } from "./mods/ex04.mjs";
console.log(add2(10, 20));
console.log(sub2(10, 20));
