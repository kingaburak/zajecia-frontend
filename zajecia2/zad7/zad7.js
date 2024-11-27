function isHappyNumber(num)
{
    let seenNums = new Set();

    while(num != 1 && !seenNums.has(num))
    {
        seenNums.add(num);
        let sum = 0;
        while(num > 0)
        {
            let digit = num % 10;
            sum += Math.pow(digit, 2);
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num === 1;
}

console.log(isHappyNumber(19))