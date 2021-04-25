var odd = function(arr)
{
    for(let i in arr)
    {
        if((arr[i]%2)!==0)
        {
            console.log(arr[i]);
        }
    }
};
var caps = function(string)
{
    for(let i in string)
    {
        let cap = string[i][0].toUpperCase()+string[i].substring(1); 
        string[i]=cap;
    }
};
var add = function(arr)
{
    let sum = 0;
    for (let i in arr)
    {
        sum+=arr[i];
    }
    return sum;
};
var prime = function(arr)
{
    for(let i in arr)
    { 
         if(arr[i] === 1){
           continue;
             }  
        var flag=0;
        for(let j=2;j<(arr[i]);j++){
            if (arr[i]%j ===0){
                flag++;
                break;
            }
        }
        if(flag === 0){
            primeNumbers.push(arr[i]);
        }
    }
};

var palindrome = function(arr)
{ 
    var palin = [];
    for (let i in arr)
    {
        var arr1 = arr[i].split("");
        var arrReverse = arr1.reverse();
        var comparisionArray = arrReverse.join("");
        if (arr[i]==comparisionArray)
        {
            palin.push(arr[i]);
        }
    }return palin;
};

var medianOfTwoArray = function(arr,arr1)
{
    if(arr.length == arr1.length)
    {    
        var finalArray = arr.concat(arr1);
        finalArray.sort((a,b)=>a-b);
        var median = (finalArray[arr.length]+finalArray[arr.length+1])/2; 
        return median;
    }
    else { return "The size of two arrays are not same"}

};

var duplicate = function(arr)
{
    for ( let i in arr)
    {
        for (let j in arr)
        {
            if (arr[i]==arr[j] && i!==j)
            {
                arr.splice(j,1);
            }
        }   
    }
    return arr;
};

var rotateArray = function(arr,k)
{
  for (let i = 0; i<k; i++)
  {
      arr.reverse();
  }
  return arr;
};


let arr = [1,2,3,4,5,6,7,8,9,10];
let arrDup = [1,2,3,4,5,6,7,6,1,5,1,2,8,9,10]
let newArray = [11,12,13,14,15,16,17,18,19,20];
var primeNumbers=[];
odd(arr);
var string = ['arun','baskar','cindrela','divya','malayalam'];
var string1 = ['arun','baskar','cindrela','divya','malayalam','civic'];

caps(string);
console.log(string);
console.log(add(arr));
prime(arr);
console.log(primeNumbers);
console.log(palindrome(string1));
console.log(medianOfTwoArray(arr,newArray));
console.log(duplicate(arrDup));
console.log(rotateArray(string1,9));