function range(start, end) 
{
    if (start > end) 
    {
        throw new Error("Początek zakresu nie może być większy niż koniec zakresu");
    }

    let arr = [];
    
    for (let i = start; i <= end; i++) 
    {
        arr.push(i);
    }

    return arr;
}

console.log(range(1, 5)); 
console.log(range(1, 4)); 
console.log(range(5, 1)); 