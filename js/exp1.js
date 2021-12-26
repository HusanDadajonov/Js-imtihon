let arr = [10,1,3,5,8,9];

for(let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr.length; k++){
        if(arr[k] > arr[k + 1]){
            let num = arr[k + 1];
            arr[k + 1] = arr[k];
            arr[k] = num;
        }
    }
}
console.log(arr);