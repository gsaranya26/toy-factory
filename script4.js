let arr=[1,0,2,0,3,4,0,5];
let t=0
let t1=0
let arr1=[];
let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        arr1[t]=arr[i];
        t++;
    }
    else{
        arr2[t1]=arr[i];
        t1++
    }
  
}
const combined=arr1.concat(arr2)
alert(combined)
alert(combined.length)
