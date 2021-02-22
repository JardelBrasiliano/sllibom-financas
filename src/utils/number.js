export const validateCurrency = (number) => {
  const noveo = number.split(',').join('.');

  const list = noveo.split('.');
  if (!Number.isNaN(+noveo)) {
    if (+number <= 0) {
      return -1;
    }
    if (list.length > 1 && list[1].length > 2) {
      return -2;
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
