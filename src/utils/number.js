export const validateCurrency = (number) => {
  const noveo = number.split(',').join('.');

  if (!Number.isNaN(+noveo)) {
    if (+number <= 0) {
      return -1;
    }
    return 1;
  }
  if (number === '') {
    return -1;
  }
  return -2;
};
export const teste = () => {
  console.log('teste');
};
