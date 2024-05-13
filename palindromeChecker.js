function palindrome(str) 
{
 let str1=str.replaceAll(' ','').replace(/[^a-zA-Z0-9]/g,'');
  let arr=str1.split('');
  let arr2=arr.reverse();
  let str2=arr2.join('');
  str1=str1.toUpperCase();
  str2=str2.toUpperCase();
  
  if(str1!=str2)
  {
    return false;
  }
  else
  {
    return true;
  }
  
}

palindrome("eye");