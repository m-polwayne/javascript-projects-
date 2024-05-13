function convertToRoman(num) {
  let m="M";      let xc="XC";    let v="V";
  let cm="CM";    let l="L";      let iv="IV";
  let d="D";      let xl="XL";    let i="I";
  let cd="CD";  	let x="X";
  let c="C";      let ix="IX";

  let RomanNum="";

  let m1=0;    let i1=0;  	 let x1=0; let c1=0; 

  if(num>=1000)
  {
    m1=Math.floor(num/1000);
     
  for(let s=0;s<m1;s++)
  {
    RomanNum=RomanNum+m;
  }
  num=num%1000;
  convertToRoman(num);
  
  
  }
  if(num>=900&&num<1000)
  {
    num=num%900;
      
         RomanNum=RomanNum+cm;
    
     convertToRoman(num);
  
  }
else   if(num>=500&&num<900)
  {
    
    num=num%500;
    
         RomanNum=RomanNum+d;
    
     convertToRoman(num);
  }
  if(num>=400&&num<500)
  {
    
    num=num%400;
     
         RomanNum=RomanNum+cd;
    
     convertToRoman(num);
  }
   if(num>=100&&num<400)
  {
    c1=Math.floor(num/100);
    num=num%100;
             for(let p=0;p<c1;p++)
  {
    RomanNum=RomanNum+c;
  }
  convertToRoman(num);
  }
   if(num>=90&&num<100)
  {
    
    num=num%90;
     
         RomanNum=RomanNum+xc;
    
     convertToRoman(num);
  
  }
   if(num>=50&&num<90)
  {
    
    num=num%50;
      
         RomanNum=RomanNum+l;
    
     convertToRoman(num);
  }
    if(num>=40&&num<50)
  {
   
    num=num%40;
   
         RomanNum=RomanNum+xl;
    
     convertToRoman(num);
  }
    if(num>=10&&num<40)
  {
    x1=Math.floor(num/10);
    num=num%10;
        for(let p=0;p<x1;p++)
  {
    RomanNum=RomanNum+x;
  }
  convertToRoman(num);
  }
    if(num==9)
  {
    
   RomanNum=RomanNum+ix;
  return  RomanNum;
  
    
  }
    if(num>=5&&num<9)
  {
    
    num=num%5;
       
         RomanNum=RomanNum+v;
    
     convertToRoman(num);
  }
    if(num==4)
  {
   
  RomanNum=RomanNum+iv;
   return RomanNum;
  
  }
    if(num=>1&&num<4)
  {
    i1=num;
     for(let y=0;y<i1;y++)
  {
    RomanNum=RomanNum+i;
  }
    
  }
 
 return RomanNum;
}

convertToRoman(36);