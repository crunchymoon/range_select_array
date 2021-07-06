/*Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 */
function getKvalues(arr, k, x) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let fromSlice = x - k;
        if (k > x) {
            newArray = arr.slice(arr[1 - 2], k);
            return newArray
        } else {
            newArray = arr.slice(fromSlice, x);

            return newArray;
        }
    }
}
let myArr = [1, 2, 3, 4, 5];
let rangeK = 2
let rangeAroundX = 1;
console.log(getKvalues(myArr, rangeK, rangeAroundX));
