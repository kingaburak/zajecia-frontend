function range(start, end) 
{
    if (start > end)
    {
        throw new Error("poczatek zakresu nie moze być wiekszy niz koniec zakresu");
    }
    
    let result = [];
    for (let i = start; i <= end; i++) 
    {
        result.push(i);
    }
    return result;
}

console.log(range(1, 4)); 