  // https://github.com/datastructures-js/priority-queue
  const MaxPriorityQueue from 'https://github.com/datastructures-js/priority-queue'

  const mpq = new MaxPriorityQueue();
  mpq.enqueue(1)
  mpq.enqueue(10)
  mpq.enqueue(15)
  mpq.enqueue(11)
  console.log(mpq.front())
  console.log(mpq)