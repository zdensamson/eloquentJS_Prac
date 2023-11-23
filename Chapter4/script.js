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

        // array = [1,2,3] array.length = 3 array.length/2 = 1.5
            // i = 0
                // temp = array[0] => 1
                // ari = array[array.length - 1 - i]
                    // => ari = array[3 - 1 - 0] ==> ari = array[2] ==> ari =  3
                    // ARRAY[0] = 3
                // arili = array[array.length - 1 - i] = temp
                    // => arili = array[3 - 1 - 0] = temp 
                    // => arili = array[2] => arili = 3 ==> ARRAY[3] = temp
                    // ARRAY[3] = 1
            
            // i = 2 --> 2 > 1.5 STOP


        // array = [1,2,3,4] | array.length = 4 | array.length/2 = 2
            // i = 0
                // temp = array[0] 
                    // TEMP = 1
                // array[0] =  array[4 - 1 -0] ==> [*,2,3,4] = 4
                // array[3] = temp ==> [1,2,3,*] =  1
                
            // i = 1-- array = [4,2,3,1]
                // temp = array[1]
                    // temp = 2
                // array[1] = array[4-1-1] ==> [4,*,3,1] = array[2] ==> [4,*,3,1] = 3
    }
    return array;
};

let arr1 = [1,2,3,4];
t = arr1[0];
arr1[0] = arr1[arr1.length - 1];
console.log(t);
console.log(arr1[0]);


// console.log(reverseArrayInPlace([1,2,3]));


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
    let outputArray = [];
    let listLength = 0;
    // create a copy of LIST to iterate over and discover the "length" of the list
    let tempList = list;
    // finds how many times we need to expand to REST before REST = NULL
    while(tempList.rest != null){
        tempList = tempList.rest;
        listLength++;
    }
    // the above while loop will always fall short by one
    listLength++;

    // expand REST the amount of times held by the listLength value
    for(let i = 0; i < listLength; i++){
        outputArray.push(list.value);
        list = list.rest;
    }
    console.log(outputArray); 
};

// console.log(arrayToList([1,2,3]));
let listExample = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
// console.log(listExample);
//istToArray(listExample);


// try two 09-24-23
let range2 = function(start, end){
    let rangeArray = []
    let nextNumber = start;
    while (nextNumber < end + 1){
        rangeArray.push(nextNumber);
        nextNumber = nextNumber + 1;
    } 

    return rangeArray;
}

let sum2 = function(numArray){
    let numberHolder = 0;
    for (let number of numbArray){
        numberHolder = numberHolder + number;
    }
    return numberHolder;
}

let reverseArray2 = function(array){
    let newArray = [];
    for (i = 0; i < array.length ; i++){
        newArray.push(array[array.length - i -1]);
    }
    return newArray;
}

// arrEx = [1,2,3]

// console.log(arrEx.length)
let reverseArrayInPlace2 = function(array){


}