function palindrom(str)
{
    let strRev = str.split('').reverse().join('');

    if(str.toLowerCase() === strRev.toLowerCase())
    {
        return true;
    }
    return false;
}

console.log(palindrom("kajak"));
console.log(palindrom("molo"));
console.log(palindrom("Anna"));

