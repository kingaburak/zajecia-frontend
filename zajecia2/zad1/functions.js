function isOdd(x)   
{
    if(x % 2 == 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

const isEven = (x) => 
{
    if(x % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(isOdd(10));
console.log(isEven(2));