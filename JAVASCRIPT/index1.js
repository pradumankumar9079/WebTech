//Q1) WAP To Find Greatest Non Negative integer between -58 to 300
let  a = -58;
let b = 300;
if(a>b){
    console.log(a);
}else{
    console.log(b);
}

//Q2) WAP To Count of Even Number between -4 to 28
let cnt=0;
for(let i=-4; i<=28; i++){
    if(i%2==0){
        cnt++;
    }
}
console.log(cnt);

//Q3) WAP To find the number that is divisible by three upto 130 
for(let i=0; i<=130; i++){
    if(i%3==0){
        console.log(i);
    }
}

//Q4) WAP To Find occurence of prime number 1 to 350
for(let i=1; i<=350; i++ ){
    if(isPrime(i)){
        console.log(i);
    }
}
function isPrime(ele) {
    if(ele<=1)
        return false;
    for(let i=2; i<ele/2; i++){
        if(ele%i==0)
            return false;
    }
    return true;
}

//Q5) factorial 
let res =1;
for(let i=2; i<=50; i++){
    res*=i;
}
console.log(res)