function one() 
{
    console.log("one")
}
function two() 
{
    setTimeout(() => {
        console.log("two");
    },3000)
    
}
function three() 
{
    console.log("Three")
}

one();
two();
three();