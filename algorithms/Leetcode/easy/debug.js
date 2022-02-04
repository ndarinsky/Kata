const add = (hash, s) => {
  if (s in hash) {
    hash[s] = hash[s]+1
  } else {
    hash[s] = 1
  }
}

const del = (hash, s) => {
  if (s in hash) {
    hash[s]--
    if (hash[s]<1) {
      delete hash[s]
    }
  } else {
    delete hash[s]
  }
}

const non_repeat_substring = function(str) {
  const hash = {}
  let left = 0

  let max = 0
  for (let r=0; r<str.length; r++) {
    if (!(str[r] in hash)) {
      add(hash, str[r])
      max = Math.max(max, Object.keys(hash).length)
    } else {
      while (str[r] in hash) {
        del(hash, str[left])
        left++
      }
      add(hash, str[r])
    }
  }

  console.log(max)
  return max
};

non_repeat_substring('aabccbb')
