function maxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
    };
}
const array = [1, 2, 3, 4, 5, 6];
console.log(maxMin(array));