function div(a,b)
{
    b = b || 1;
    
    return a/b;
}

function div(a,b=1)
{
    return a/b;
}

console.log(div(5,7));