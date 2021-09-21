/* 
Given array of numbers reprent the stock price of a company in chronological order, write a function that calculate
max profit you could have made from buying and selling that stock once.
You must buy before you sell it.

for example, array [9,11,5,8,7,10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars */

const findMaxProfit = (arr)=>{
let array = arr, profit = 0;
 for (let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        let temp = array[j] - array[i];
        if (profit < temp){
            profit = temp;
        }
    }
 }
 console.log(profit)
}

findMaxProfit([9,8,7,10,5,11])