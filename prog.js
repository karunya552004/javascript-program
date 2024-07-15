//1.print number from 1 to 100
for(i=1;i<=100;i++)
{
    if(i%3==0&&i%5==0)
        console.log("FizzBuzz");
    else if(i%5==0)
      console.log("Buzz");
    else if(i%3==0)
        console.log("Fizz");
    else
    console.log(i);
}
//2.check for palindrome
function palindrome(str)
{
    let str1="";
    let i;
   for (i=str.length-1;i>=0;i--){ 
        str1 += str[i];
  }
   if(str==str1){
        return "It is a Palindrome";
    }
   else{
        return "It is Not a Palindrome";
   }
}
console.log(palindrome("pop"));
 
//3.return largest number
function array(a){
  let num1 = 0;
    for (let i = 0; i < a.length; i++){
     if (a[i] >= num1){
        num1 = a[i];
      }
    }
return num1;
 }
  
  const arr = [2,5,7,89];
  console.log(array(arr));

 //4.key and occurence
 function occ(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;

}
console.log(occ("I am a dancer"));

//5.longest word
function long(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(long("This is a javasrcipt program"));


//6.return factorial
function factorial(number){
    let i;
    let fact=1;
    for(i=1;i<=number;i++){
       fact=fact*i;
        
   }
    return(fact);
}
console.log(factorial(4));


//7.celsius to fahrenheit ;
function num(number){
  return (9/5)*number+32;
}
console.log(num(17));

//8.missing number

let array=[0,1,2,3,5,6,7,8];
let num=array.length;//4
let sum1=0;
let num1;
for(num1=0;num1<=num;num1++){
    sum1=sum1+num1;
}
let sum=0;
let num2;
for(num2=0;num2<num;num2++){
    sum=sum+array[num2];
}
console.log(sum1-sum);


