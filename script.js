// // 1
// const numTillParam = (param) =>{
//     for(let i=0;i<=5;i++){
//         console.log(i)
//     }
// }
// numTillParam(5)
// // 2
// const loop2 = (param) =>{
//     for(let i=1; i<=1000; i++){
//         console.log(`Do I gotta repeat myself?`)
//     }
// }
// loop2()
// // 3
// const loop3 = (param) =>{
//     let i=0
//     for(let char of param){
//         i++
//     }
//     console.log(i)
// }
// loop3("dude")
// // 4
// const loop4 = (param) =>{
//     let num = 0
//     if(param >= 1){
//     for(let i=0; i<param; i++){
//         num++
//         console.log(num)
//     }
//     }
    
// }
// loop4(9)
// // 5
// const loop5 = (param) =>{
//     if(param === param.toString()){
//     let i = -1
//     for(char of param){
//         i++
//         console.log(param[i])
//     }
// }
// }
// loop5("I kinda did it")
// // 6
// const loop6 = (param) =>{
//     if(param >= 2){
//         for(i=0; i<= param; i++){
//             if(i % 2 === 0){
//                 console.log(i)
//             }
//         }
//     }
// }
// loop6(16)
// // 7
// const loop7 = (param) =>{
//     console.log(param.toUpperCase())
//     console.log(param.toLowerCase())
// }
// loop7("bill")
// // 8
// const loop8 = (param) =>{
//     if(param >= 2){
//         for(i=0; i<= param; i++){
//             if(i % 2 !== 0){
//                 console.log(i)
//             }
//         }
//     }
// }
// loop8(16)
const checkPangram =(param) =>{
    param = param.toLowerCase()
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let usedNum = alpha.length-1;
    
    for(let num of alpha){
        for(let i=0; i<=param.length;i++){
            if(param[i] === alpha[usedNum] && usedNum >= 0){
                usedNum--;
            }
        }
    }

    if(usedNum === -1){
        return true
    }
    return false
}

console.log(checkPangram("The five boxing wizards jump quickly."))
console.log(checkPangram("The five boxing wizards jump backwards."))
console.log(checkPangram("Pack my box with five dozen liquor jugs."))
console.log(checkPangram("Punch the box with five dozen liquor mugs."))
console.log(checkPangram("ewqrtyuiopasdghjkfgdacxzvbmzxcnbvmasdghjfklqweutyr"))
console.log(checkPangram("ewqrtyuiopsdghjkfgdcxzvbmzxcnbvmsdghjfklqweutyr"))
// Removed The a's

