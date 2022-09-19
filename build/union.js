"use strict";
// Can give data types option by using union
let aa = true;
console.log(aa);
function addition5(x, y) {
    if (typeof x == "number" && typeof y == 'number') {
        return x + y;
    }
    else if (typeof x == "string" && typeof y == 'string') {
        return Number(x) + Number(y);
    }
    else {
        return 0;
    }
}
