var createCounter = function ( init )
{
  let count = init;
  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = init;
    return count;
  }
  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());


// kenapa nilai init nya harus dimasukan kedalam variable count? supaya yang di decrement atau di increment bukan nilai init aslinya, kita butuh nilai init aslinya untuk mereset nilainya ke awal.