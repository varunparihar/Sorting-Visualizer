let array = [2, 5, 8, 1, 3, 9];
const merge = function(left, right) {
    // console.log(right);
    let arr = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            arr.push(right.shift());
        } else {
            arr.push(left.shift());
        }
    }
    return [...arr, ...left, ...right];
}

const mergeSort = function(array) {
    let half = Math.floor(array.length / 2);
    if (array.length < 2) {
        return array;
    }
    let left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}
let newArray = mergeSort(array);
console.log(newArray)