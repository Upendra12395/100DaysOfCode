//this program is use to implement power function.

const power = (a,b)=>{
    result = 1
    for (let i=0;i<b;i++){
        result*=a
    }
    console.log(result)
}

power(3,3)