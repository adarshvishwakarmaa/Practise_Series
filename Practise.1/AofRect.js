function rectangle(length,width){
    if(length <=0 || width <=0){
        throw new  RangeError("The Num Should be Positive")
    }
    area = length * width;
    console.log("Area of Recatangle value is:",area);
}
rectangle(23,23);
rectangle(2.3,3);
rectangle(283,2003);
rectangle(290.3,2993);
rectangle(230,23);
rectangle(23,23);



