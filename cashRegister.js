function checkCashRegister(price, cash, cid) {
    let changes=(cash-price);
    let sum=0;
   var ret= {status: "", change: cid};
    for(let i=0;i<cid.length;i++){
      sum+=cid[i][1];
    }
    console.log(changes);
   if (changes>sum){
    return {status: "INSUFFICIENT_FUNDS", change: []};
   }
   else if(changes===sum){
     ret.status= "CLOSED"; 
     ret.change=[...cid];
     
  return ret;
   }
    if(sum>changes){
  
        
      ret.change= [...denominations(changes,cid)];
      if(ret.change.length==0)
      {
         ret.status= "INSUFFICIENT_FUNDS";
      }
      else
      {
           ret.status="OPEN";
      }
      console.log(ret);
      return ret;
   }
    
  }
  function denominations(chan,cib){
    let change=[];
   var denoms={"PENNY":0.01,
               "NICKEL":0.05,
               "DIME":0.1, 
               "QUARTER":0.25, 
               "ONE":1,
               "FIVE":5, 
               "TEN":10, 
               "TWENTY":20,
               "ONE HUNDRED":100
  
               }
  for(let i=cib.length-1;i>=0;i--){
    const bill=cib[i][0];
    const avail=cib[i][1];
    const worth=denoms[bill];
    let amount=(avail/worth).toFixed(2);
    let needed=0;
    while(chan>=worth&&amount>0){
      chan-=worth;
      chan=chan.toFixed(2);
      amount--;
      needed++;
  
    }
    if(needed>0){
      change.push([bill,needed*worth]);
    }
  
  }
  if(chan>0){
  change.shift();
  }
  return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);