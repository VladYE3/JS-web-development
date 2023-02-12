let myArr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
// function treeSum(arr) {
//     let sum = 0;
//     arr = arr.flat(Infinity);
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// treeSum(myArr);
function treeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Array.isArray(arr[i]) ? treeSum(arr[i]) : arr[i];
    }
    return sum;
}
console.log(treeSum(myArr));



