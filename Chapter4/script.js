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

let sum = function(array){
    let numberStorage = 0;
    for(let element of array){
        numberStorage = numberStorage + element;
    }
    return(numberStorage);
}

// console.log(sum(range(1,10)));
let reverseArray = function(array){
    let backwardArray = [];
    for(let element of array){
        backwardArray.unshift(element);
    }
    return backwardArray;
};

let reverseArrayInPlace = function(array){
    let temp;
    for(let i = 0; i < array.length / 2; i++){
        // the order of the below three lines of code MATTERS
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
  
    }
    return array;
};

let arrayToList = function(array){
    console.log(array.length);
    for(let i = 0; i < array.length; i++){
        
        if(i == 0){
            list = {value: array[array.length - 1 - i], rest: null}
        }else{
            list = {value: array[array.length - 1 - i], rest: list};
        }
    }
    return list;
};

let listToArray = function(list){

};

console.log(arrayToList([1,2,3]));
let listExample = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
console.log(listExample);