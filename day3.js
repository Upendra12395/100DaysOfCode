/* given list of integrer, return the largest product thet can be made by multiplying any three integer,
for example, if the list is [-10,-10,5,2], we should return 500 */

const findProduct = (arr)=>{
    let array1 = arr;
    let product = 1;
    for (let i=0; i<array1.length; i++){
        for(let j=i+1;j<array1.length;j++){
            for(let k=j+1;k<array1.length;k++){
                let temp = array1[i] * array1[j] * array1[k];
                if (temp > product){
                    product = temp;
                }
            }
        }
    }
    console.log(product);
}

findProduct([-10,-10,2,-5,1,7,8])