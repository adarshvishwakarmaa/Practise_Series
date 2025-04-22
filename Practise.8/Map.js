const arr = [12,3,4,5,6,7,89,2,4]

const Map = arr.map((e)=>{
   return e -2
})
console.log(Map);



const filt = [1,2,3,4,2,1,3,4,5,6,7,4,3,1,2,5,6,7,8,8]

const mapfil = filt
              .map((e)=>e +10)
              .map((e)=>e-1)
             .filter((e)=>e>=15)
console.log("The Output of chanining Method",mapfil);

             