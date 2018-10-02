function product(values) {
  if (values === null || values.length === 0) return null;
  return values.reduce((acc, cur) => {
    acc * cur;
  }, 1);
}