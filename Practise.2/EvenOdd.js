//2.use of if-Else 

function checkEvenorOdd(a){
    const rem = a%2
    if(rem ===0){
        return "Even Number"
    }else{
        return "odd Number"
    }

}
console.log(checkEvenorOdd(12));
console.log(checkEvenorOdd(2));
console.log(checkEvenorOdd(9));
console.log(checkEvenorOdd(-81));
console.log(checkEvenorOdd(-87656));
console.log(checkEvenorOdd(-7777));

//2.use of ternary operator
function ternary(x){
    return x % 2 ===0 ? "Even" : "Odd";
}

console.log(ternary(30));
console.log(ternary(400000));
console.log(ternary(-43));
console.log(ternary(-232453));
console.log(ternary(-2345567673));


