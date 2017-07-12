'use strict';

function quickSort(input) {
     if(input==null){
       throw "not an array";
   }
    return recursivequickSort(input,0,input.length-1);
}
 var index=0;
function recursivequickSort(input,left,right){
   
  
    if (input.length > 1) {
         index = findPivot(input, left, right);
        if (left < index - 1) {
            recursivequickSort(input,left,  index-1);
        }

        if (index < right) {
            recursivequickSort(input, index, right);
        }

    }
return input;
};

function findPivot(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}
module.exports = quickSort;