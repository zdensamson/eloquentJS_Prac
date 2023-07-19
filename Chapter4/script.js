// add optional step value to RANGE function
let range = function(start, end, step){
    let counter = end - start;
    let outputArray = [];

    if(step == null){
        for(i = 0; i < counter + 1; i++ ){
            let currentNumber = start + i;
            outputArray.push(currentNumber);
        }
        return outputArray;
    }else if(step > 0){
        for(i = 0; i < end ; i = i + step ){
            let currentNumber = start + i;
            if(currentNumber < end || currentNumber == end){
                outputArray.push(currentNumber);
            }else{
                return outputArray;
            }  
        }
        return outputArray;
    }else{
        for(i = 0; -i < start; i = i + step ){
            let currentNumber = start + i;
            if(currentNumber > end || currentNumber == end){
                outputArray.push(currentNumber);
            }else{
                return outputArray;
            }  
        }
        return outputArray;
    }

}

console.log(range(5, 2, -1));
console.log(range(10, 0, -3));
console.log(range(10, 0, -11));
console.log(range(1, 10, 2));
console.log(range(1, 10, 15));


let sum = function(array){
    let numberStorage = 0;
    for(let element of array){
        numberStorage = numberStorage + element;
    }
    return(numberStorage);
}

// console.log(sum(range(1,10)));
