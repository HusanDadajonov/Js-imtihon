function add(a = 0,b = 0){
    if(a < 0){
        -1 * a;
        return `${a} + ${b} = ${a + b}`;
    }
    else if(b < 0){
        -1 * b;
        return `${a} + ${b} = ${a + b}`;
    }
}
console.log(add(0,-10));
