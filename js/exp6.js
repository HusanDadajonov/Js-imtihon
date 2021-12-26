function isPrimeNumber(num){
    let bool = 1
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            bool = 0;
            break;
        }
    }
    if(bool == 1) {
        return true;
    }
}

let num = 32;
let count = 0

for(let i = 2; i < num; i++){
    if(isPrimeNumber(i)){
        count++;
    }
}
console.log(count);