// class Solution {
//     constructor(N, R) {
//         this.N = N;
//         this.R = R;
//     }

//     solve(N, R) {
//         if (R === 0) return BigInt(1);
//         if (R === 1) return BigInt(N % 1000000007);

//         if (R % 2 === 0) {
//             let known = this.power(N, R / 2);
//             return (BigInt(known) * BigInt(known)) % BigInt(1000000007)+'hii';

//         } else {
//             let known = BigInt(N % 1000000007);
//             let ans = this.power(N, R - 1);
//             return ((BigInt(known) * BigInt(ans)) % BigInt(1000000007)) % BigInt(1000000007)+'hello';
//         }
//     }

//     power(N, R) {
//         return Number(this.solve(N, R));
//     }

//     getResult() {
//         return this.power(this.N, this.R);
//     }
// }

// let val = new Solution(13, 31);
// console.log(val.getResult());

function  isPrime(n){
        
    //code here
    if(n==1)
    {
        return 0
    }
    let sqroot= Math.sqrt(n)
    let floor =Math.floor(sqroot)
    let count=1
    for(let i=2; i<=floor; i++)
    {
      
        if(n%i===0)
        {  
           count++            
        }
        
    }
    return count ? "true":'false' 
    
}
console.log(isPrime(41))
