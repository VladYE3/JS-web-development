let arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
function treeSum(myArr) {
    let sum = 0;
    myArr = myArr.flat(Infinity);
    for (let i = 0; i < myArr.length; i++){
        sum += myArr[i];
    }
    console.log(sum);
}
treeSum(arr);



