function sum(numbers) 
{
   let sum = 0;
   numbers.forEach((number) => {
       sum += number;
   });
   
   return sum;
}

const result = sum([3, 7, 5]);
console.log(result); 
