function debounce(func, wait) {
    let lastCallTime = null
    return function() {
      if (lastCallTime && Date.now() - lastCallTime > wait) {
        lastCallTime = null
        return func()
      }
      lastCallTime = Date.now()
    }
  }

  let i = 0;
  const increment = debounce(() => {
    i++;
  }, 500);

  console.log(i)
//   expect(i).toBe(0);
  increment();
  console.log(i)
//   expect(i).toBe(0);

  setTimeout(() => {
    console.log(i)
    // expect(i).toBe(1);
    done();
  }, 1000);
