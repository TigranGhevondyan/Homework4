var myfunc=function(n){
   let arr=[0,1]
   
   let i=2;
    while(true){
      let a=arr[i-1]+arr[i-2];
        if(a<=n){
          arr.push(a);
            i++;
        }
        else {
            break;
           
        }
    }
    return arr;
}

print(myfunc(7));
print(myfunc(45));

var myfunc=function(n){
    let st=String(n);
    let sm=0;
    let pr=1;
    for(let i=0; i<st.length; i++){
      let d=Number(st[i]);
      sm+=d;
      pr*=d;   
    }
    
    if(sm==0){
      return "Cannot calculate.";
    }
    
    if(pr % sm==0){
      return "Quotient is "+(pr/sm);
    }
    else{
      return "‘Remainder is "+(pr % sm);
    }
}

print(myfunc(1233));
print(myfunc(0));
print(myfunc(5));
print(myfunc(455));


var myfunc=function(arr){
    let mx=arr[0];
    let mn=arr[0];
    for(let i=0; i<arr.length; i++){
        if(mx<arr[i]){
          mx=arr[i];
        }
        if(mn>arr[i]){
          mn=arr[i];
        }
    }
    
    let v=mx-mn;
    for(let i=0; i<arr.length; i++){
        if(v==arr[i]){
          return true;
        }
    }
    return false;
}

print(myfunc([1, 10, 2, 9, 2, 3, 9, 4]));
print(myfunc([1, 4, -43, 12]));


var myfunc=function(arr){
    let mx=arr[0];
    let mxInd=0;
    for(let i=0; i<arr.length; i++){
        if(mx<arr[i]){
          mx=arr[i];
          mxInd=i;
        }
    }
    
    let secmx=Number.MIN_VALUE;
    let secInd=0;
    for(let i=0; i<arr.length; i++){
        if(secmx<arr[i] && i!=mxInd){
           secmx=arr[i];
            secInd=i;
        }
    }
    return secInd;
}

print(myfunc([23, -98, 0, -456, 12, 8]));
print(myfunc([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));

var myfunc=function(arr,pad, repeat){
    
    if(arr.length<pad){
      return "Invalid padding amount";
    }
    
    let pdf=arr.slice(0,pad);
    let pfe=arr.slice(arr.length-pad,arr.length);
    for(let i=0; i<repeat; i++){
      arr.unshift(pdf);
      arr.push(pfe);
    }
    
    return arr;
    
}

print(myfunc([1,2,3,4],1,3));
print(myfunc([1,2,3,4],2,1));
print(myfunc([1],1,3));
print(myfunc([1],2,3));



var myfunc=function(n){
    let s="";
    for(let j=0; j<n; j++){
       s+="* ";
    }
    for(let i=0; i<n; i++){
        
        print(s);
    }
}    

myfunc(5);

var myfunc=function(n){
    let s="";
    for(let j=0; j<n; j++){
      for(let i=0; i<n; i++){
          if(j>0 && j<n-1 && i>0 && i<n-1){
            s+="  ";
          }
          else {
            s+="* ";
          }
      }
        print(s);
        s="";
    }
    
}    

myfunc(5);


var myfunc=function(){
   let s="";
    for(let i=1; i<=5; i++){
       s+=String(i);
       print(s);
    }
    for(let i=1; i<s.length; i++){
      let sub=s.slice(0,s.length-i);
      print(sub);
    }
}    

myfunc();



