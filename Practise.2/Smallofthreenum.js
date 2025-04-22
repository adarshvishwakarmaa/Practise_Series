function smallestofThreenum(x,y,z){

    if(x<y && x<z){
        return x
    }
    else if(y<z && y<x){
        return y
    }
    else{
        return z
    }
}
console.log("the small num is x:",smallestofThreenum(2,4,6));
console.log("the small num is y:",smallestofThreenum(7,4,6));
console.log("the small num is z:",smallestofThreenum(2,4,0));
console.log("the small num is y:",smallestofThreenum(2,-4,6));
console.log("the small num is z:",smallestofThreenum(2,4,-6));


//1.reduce code
// function reduce(p,q,r){
//     const small = r
//     if(p<small){
//         return p;
//     }else if(q<small){
//         return q
//     }else{
//         return small
//     }
// }
// console.log("small is:",reduce(2,5,7));
// console.log("small is:",reduce(2,1,7));
// console.log("small is:",reduce(23,5,9));
// console.log("small is:",reduce(-2,95,-7));


//2.reduce code
function reduce(p, q, r) {
    return Math.min(p, q, r);
}
console.log("small is:",reduce(2,5,7));
console.log("small is:",reduce(2,1,7));
console.log("small is:",reduce(23,5,9));
console.log("small is:",reduce(-2,95,-7));



function LargestNumOfFour(w,x,y,z){
    if(w>x && w>y && w>z){
        return w
    }else if(x>w && x>y &&x>z){
        return x;
    }else if(y>w && y>x && y>z){
        return y;
    }else{
        return z;
    }


}
console.log("The large num is:",LargestNumOfFour(2,4,6,7));
console.log("The large num is:",LargestNumOfFour(2,40,6,70));
console.log("The large num is:",LargestNumOfFour(2,4,600,7));
console.log("The large num is:",LargestNumOfFour(-2,-4,-6,-7));
console.log("The large num is:",LargestNumOfFour(0.2,0.4,0.06,0.7));
console.log("The large num is:",LargestNumOfFour(-0.2,-0.04,-0.0006,-0.00007));

