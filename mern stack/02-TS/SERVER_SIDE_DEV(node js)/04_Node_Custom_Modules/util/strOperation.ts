export const reverseStr=(str:string)=>
{
    let tempStr:string='';
    for(let i:number=str.length-1; i>=0;i--)
    {
        tempStr+=`${str.charAt(i)}`
    }
    return tempStr;
}

export const add=(a:number, b:number)=>
{
    return a+b;
}