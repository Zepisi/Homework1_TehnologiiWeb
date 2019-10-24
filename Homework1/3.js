function distance(first, second){
    
    
    console.log(first.length+second.length);

    if(!Array.isArray(first)){
        throw "InvalidType";
    }
    if(!Array.isArray(second)){
        throw "InvalidType";
    }

    if(!Array.isArray(first) || !first.length &&
              !Array.isArray(second) || !second.length )
              {
                 console.log("empty");
              }
              else{
                  console.log("notEmpty");
              }

    if(isNaN(first))
    {
        console.log(first+"is not a number");
    }
    else{
        console.log(first+"is a number");
    }
    if(typeof first === 'string')
    {
        console.log("it's a string");
    }else{
        console.log("it's not a string");
    }

    if(isNaN(second))
    {
        console.log(second+"is not a number");
    }
    else{
        console.log(second+"is a number");
    }
    if(typeof second === 'string')
    {
        console.log("it's a string");
    }else{
        console.log("it's not a string");
    }
  

}

var firstA=[1,2,4,3,1,8];
var secondA=[2,2,4,3,4];
var noduplA=firstA.filter(function(A, index){
    return firstA.indexOf(A)===index;
})

var noduplB=secondA.filter(function(B,index){
    return secondA.indexOf(B)===index;
})

distance(firstA,secondA);
console.log(noduplA);
console.log(noduplB);
//distance
console.log(noduplA.length-noduplB.length);
//error
try{
    distance([1,2,3],8);
}catch(e){
    console.error(e);
}
//compare
distance(0 ,0 )
console.log(firstA);
