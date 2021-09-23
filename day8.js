/* Given an array of integers & a number K, whrere 1<=k<=length of array. 
Compute the maximum value of each subarray of length K
for example, given array [10,5,2,7,8,7] and k=3 so we should get [10,7,8,8] 
since 
10 = [10,2,5,]
7=[2,5,7]
8=[5,7,8]
8=[7,8,7]*/

const findMax = (arr, k) =>{
    let array1 = []
    for(let i=0;i<=arr.length-k;i++){
        let max = arr[i]
        for(let j=i;j<i+k;j++){
            if (max < arr[j]){
                max = arr[j]
            }
        }
        array1.push(max)
    }
    console.log(array1)
}

findMax([10,5,9,1,12,2,7,8,7],4)