function TreeSum() {
    let arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
    let sum = 0;
    arr = arr.flat(Infinity);
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
TreeSum();


