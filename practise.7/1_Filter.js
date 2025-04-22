const mynums = [1,2,3,4,5,6,7,8,9,10]
const numbs = mynums.filter((num)=>num >2)
console.log(`1. ${mynums}:`,"The Output is :",numbs);


const my1nums = [1,2,3,4,5,6,7,8,9,10]
const my1 = my1nums.filter((m)=>{
  return  m>5
})
console.log(`2. ${my1nums}:`,"The Output is :",my1);



const vowles = ["a","e","i","o","u","s"]

const myvowles = vowles.filter((e)=>vowles.includes(e))
console.log(`3. ${vowles}:`,"The Output is :",myvowles);
