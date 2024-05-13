function rot13(str) {
    let arr1=["A","B","C","D","E","F","G","H","I","J","K","L","M"];
    let arr2=["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //let cha="";
    let str2=str.split('');
    let str3="";
    
    for(let i=0;i<str2.length;i++)
    {
     
      for(let j=0;j<arr1.length;j++)
      {
        if(str2[i]==arr1[j])
      {
        str2[i]=arr2[j];
      }
      else if(str2[i]==arr2[j])
      {
        str2[i]=arr1[j];
      }
     else if(str2[i]==" "){
       str2[i]=" ";
      }
      
    else{
       str2[i]= str2[i];
    }
      }
      str3=str2.join('');
    
    }
    
      return str3;
    }
    
    rot13("SERR PBQR PNZC");