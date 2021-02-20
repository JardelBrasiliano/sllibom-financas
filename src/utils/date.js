const dataFormatWithBar = (date) => {
  const day = date.getDate();
  const month = !(date.getMonth() + 1 >= 10)
    ? `0${date.getMonth()}`
    : date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const dataTodayFormatWithBar = () => {
  const date = new Date();
  const today = dataFormatWithBar(date);

  return today;
};

const dayBefore = (sub) => {
  const date = new Date();
  date.setDate(date.getDate() - sub);

  return dataFormatWithBar(date);
};

const compareDate = (b, a) => {
  const [dayA, monthA, yearA] = a.postDay.split('/').join(',').split(',', 3);
  const [dayB, monthB, yearB] = b.postDay.split('/').join(',').split(',', 3);

  const subDay = +dayA - +dayB;
  const subMonth = +monthA - +monthB;
  const subYear = +yearA - +yearB;

  if (subYear !== 0) {
    return subYear;
  }
  if (subMonth !== 0) {
    return subMonth;
  }
  if (subDay !== 0) {
    return subDay;
  }
  return 1;
};

export { dataTodayFormatWithBar, dayBefore, compareDate };
