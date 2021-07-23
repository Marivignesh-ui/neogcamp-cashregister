function balance(event){
    event.preventDefault();
    const bill=document.getElementsByName("billamt")[0].value;
    const cash=document.getElementsByName("cashrec")[0].value;
    let bal = cash - bill;
    denom(bal);
    setbalance(bal);
}
function denom(b){
    let rem = 0;
    setval(Math.floor(b / 2000),"tth",2000);
    rem = b - Math.floor(b / 2000) * 2000;
    console.log(rem);
    if (rem !== 0) {
      setval(Math.floor(rem / 500),"fvh",500);
      rem = rem - Math.floor(rem / 500) * 500;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 500),"fvh",500);
      rem = b - Math.floor(b / 500) * 500;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setval(Math.floor(rem / 100),"hnd",100);
      rem = rem - Math.floor(rem / 100) * 100;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 100),"hnd",100);
      rem = b - Math.floor(b / 100) * 100;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setval(Math.floor(rem / 50),"fty",50);
      rem = rem - Math.floor(rem / 50) * 50;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 50),"fty",50);
      rem = b - Math.floor(b / 50) * 50;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setval(Math.floor(rem / 10),"ten",10);
      rem = rem - Math.floor(rem / 10) * 10;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 10),"ten",10);
      rem = b - Math.floor(b / 10) * 10;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setval(Math.floor(rem / 5),"fiv",5);
      rem = rem - Math.floor(rem / 5) * 5;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 5),"fiv",5);
      rem = b - Math.floor(b / 5) * 5;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setval(Math.floor(rem / 1),"one",1);
      rem = rem - Math.floor(rem / 1) * 1;
      if (rem === 0) return;
    } else {
      setval(Math.floor(b / 1),"one",1);
      rem = b - Math.floor(b / 1) * 1;
      if (rem === 0) return;
    }
}
function setval(val,id,mul){
    let element=document.getElementById(`${id}`);
    let element1=document.getElementById(`${id}a`);
    element.innerHTML=`${val}`;
    element1.innerHTML=`${val*mul}`;
}
function setbalance(b){
    let balspan=document.getElementById("balspan");
    balspan.innerHTML=`${b}`;
}