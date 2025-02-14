function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unexpected results if a or b is actually 0.
  }
  return a + b; 
}