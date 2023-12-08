// 第一題、寫一個函式計算下列公式之總和：
// 1+2-3+4-5+6-.....+ 或 -  N

// N = 面試現場提供（N 一定是正整數）
// 面試現場會使用您的電腦代入值，代入 N 值之後**程式現場運行出結果的時
// **不能超過 2 秒，且不會造成當機。

// 一、12515972111讀取速讀超過2秒
// function calculateSum(N){
//     let sum = 0;
//     let sign = 1;

//     for (let i = 1; i<N; i++){
//         sum += sign * i;
//         sign = -sign;
//     };

//     return sum;
// }

// const result = calculateSum(12515972111)
// console.log(result);

// 二、
function calculateSum(N){
    if (N === 1) {
        return 1;
    }

    if (N === 2) {
        return 3;
    }

    const isEven = N % 2 === 0;

    if(isEven){
        return N/2;
    }else{
        return -(N+1) / 2;
    }
}

const result = calculateSum(N)
console.log(result);
