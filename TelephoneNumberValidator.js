function telephoneCheck(str) {
    let r=  /^[1]{0,1}[\s ]{0,2}([0-9]{3}|[(]{1}[0-9]{3}[)]{1})[s\- ]{0,2}[0-9]{3}[s\- ]{0,2}[0-9]{4}$/;
      if(r.test(str)==true){
        return true;
      }
      return false;
    }
    
    telephoneCheck("555-555-5555");