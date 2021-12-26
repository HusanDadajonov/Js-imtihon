function getPrimeNumbersArray(...args){
    for(let i = 0; i < args.length; i++){
        for(let j = 2; j < args[i]; j++){
            if(args[i] % j == 0){
                args[i] = 1;
                break;
            }
        }
        if(args[i] != 1){
            console.log(args[i]);
        }
    }
}

getPrimeNumbersArray(1,4,5,7,12);
