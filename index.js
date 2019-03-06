var arr = [1,2,3,4,5,6];
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

function incForeach(array) {
    console.log("ForEach method:");
    array.forEach(function (item) {
        console.log(item + 1);
    });

}

function incFor(array) {
    console.log("For method:");
    for(var i = 0 ; i < array.length; i++){
        array[i] = array[i]+1;
    }
   return array;
}

function incMap(array) {
    console.log("Map method");
    var mapInc = array.map(function(item) {
        return item + 1;
    });
    return mapInc;
}

function avgForeach(array) {
    console.log("ForEach avg method:");
    var sum = 0;
    array.forEach(function (item) {
        sum += item;
    });
    return sum/(array.length+1);
}

function avgFor(array) {
    console.log("For avg method:");
    var sum = 0;
    for(var i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum/(array.length+1);
}

function ForEvenIndex(array){
    console.log("For Even Index Sum");
    var sum = 0;
    for(var i=0; i< array.length; i++){
        if(i % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}
function ForEachEvenIndex(array){
    console.log("ForEach Even Index Sum");
    var sum = 0;
    array.forEach(function (item,i) {
        if (i % 2 !== 0) {
            sum += item;
        }
    });
    return sum;
}

function CountMatrixDiagonal(matrix){
    console.log("Matrix Count:");
    var sumMain=0;
    var sumReverse=0;
    for (var i = 0; i < matrix.length; i++){
        sumMain += matrix[i][i];
        sumReverse += matrix[i][matrix.length - 1 - i];
    }
    console.log(sumMain-sumReverse);
}

console.log(ForEvenIndex(arr));
console.log(ForEachEvenIndex(arr));

console.log(avgForeach(arr));
console.log(avgFor(arr));

console.log(incMap(arr));
incForeach(arr);
console.log(incFor(arr));

CountMatrixDiagonal(matrix);


