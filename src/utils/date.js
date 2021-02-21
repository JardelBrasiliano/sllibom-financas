const dataFormatWithBar = (date) => {
  const day = date.getDate();
  const month = !(date.getMonth() + 1 >= 10)
    ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const dataTodayFormatWithBar = () => {
  const date = new Date();
  const today = dataFormatWithBar(date);

  return today;
};
dataTodayFormatWithBar();

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

const extentDate = (date) => {
  const nameMonth = [
    '',
    'jan',
    'fev',
    'mar',
    'abr',
    'maio',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];
  const nameDay = ['dom', 'seg', 'ter', 'qua', 'quint', 'sext', 'sab'];
  const year = date[6] + date[7] + date[8] + date[9];

  const dateObj = new Date(year, +(date[3] + date[4]), date[0] + date[1]);

  const extDay = nameDay[dateObj.getUTCDay()];
  const extMonth = nameMonth[+(date[3] + date[4])];
  const extYear = year;

  return { extDay, extMonth, extYear };
};
const { extMonth } = extentDate('21/02/2021');
console.log(extMonth);
export { dataTodayFormatWithBar, dayBefore, compareDate, extentDate };
