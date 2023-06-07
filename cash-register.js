function checkCashRegister(price, cash, cid) {
  const equivalent = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };
  let change = cash - price; 
  let status;
  cid.reverse();
  let changeMap = cid.map(([name, val]) => {
    if (val > change && val) {
      val = equivalent[name];
      val *= Math.floor(change / val) ;
    }
    change = change.toFixed(2) - val
    console.log([name, val, change])
    return [name, val];
  });
  console.log("CHANGE MAP", changeMap.toString(),'\n')
  console.log("cidaaaaaaa", cid.toString(),'\n')
  let isSame = changeMap.toString() == cid.toString();
  console.log("SAME?", isSame, !change)
  if (change) return {
    status: 'INSUFFICIENT_FUNDS', 
    change: []
  };
  else if (isSame && !change) return {
    status: 'CLOSED', 
    change: changeMap.reverse()
  } 
  else return {
    status: 'OPEN',
    change: changeMap.filter(([_, val]) => val)
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))