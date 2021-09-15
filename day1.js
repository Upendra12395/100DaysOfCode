//given a m*n matrix, print the matrix in clockwise order
let array = [[1,2,3,4,5],
             [6,7,8,9,10],
             [11,12,13,14,15],
             [16,17,18,19,20]];
let m = 4, n= 5;
for(let i=0; i<m;i++){
    if (i%2==0){
        for(let j=0;j<n;j++){
            console.log(array[i][j])
        }
    }else{
        for(let j=n-1;j>=0;j--){
            console.log(array[i][j])
        }
    }
}