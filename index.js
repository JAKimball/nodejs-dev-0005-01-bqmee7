const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then((resolve) => console.log(resolve));
  baz();
};

foo();
console.log(
  'um... THIS is right after baz, and before the callback in the Job Queue!'
);
