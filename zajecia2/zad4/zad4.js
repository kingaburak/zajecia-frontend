function sum(arr)
{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(sum([1, 1, 1]))
console.log(sum([1, 2, 3]))
console.log(sum([3, 7, 5]))