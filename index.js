const app=require('./app')
const laxman=require('../laxman')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
console.log(laxman.xyz())
const result =arr.filter((item)=>{
    return item>=6
});
console.warn(result);