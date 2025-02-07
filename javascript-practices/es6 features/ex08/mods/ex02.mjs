/*
    Unnamed Export Module
    
    1. default 키워드를 사용
    2. 주의: 이름 없이 export 되기 때문에 하나만 export 할 수 있다.

 */

// export default {
//     add: (a, b) => a + b,
//     sub: (a, b) => a - b,
// };

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

export default {
    add: add,
    sub: sub,
};

// export default { add, sub }; // 위와 동일한 표현
