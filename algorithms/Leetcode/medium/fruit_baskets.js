const add = (hash, s) => {
    if (s in hash) {
      hash[s]++
    } else {
      hash[s] = 1
    }
  }
  
  const rem = (hash, s) => {
    if (hash[s] === 1) {
      delete hash[s]
    } else {
      hash[s]--
    }
  }
  
  const fruits_into_baskets = function(fruits) {
    let hash = {}
    let l = 0
    let max = 0
    const count = 2
    for (r=0; r<fruits.length; r++) {
      add(hash, fruits[r])
      
      while (Object.keys(hash).length>count) {
        rem(hash, fruits[l])
        l++
      }  
      max = Math.max(max, r-l+1)
    } 
    return max;
  };
  
  fruits_into_baskets(['A','B','C','A','C'])
  