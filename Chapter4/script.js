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

// console.log(reverseArray([1,2,3]));

let reverseArrayInPlace = function(array){
    let evenFlag = array.length % 2;
    if(evenFlag == 0){
        console.log("even");
    }else{
        console.log("odd");
        let halfWayPoint = (array.length /2)-.5;
        console.log(array[halfWayPoint]);
    }

};
console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));