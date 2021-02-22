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
  const [day, month, year] =
    date[2] === '/' ? date.split('/') : date.split('-');

  const nameDay = ['dom', 'seg', 'ter', 'qua', 'quint', 'sext', 'sab'];

  const dateObj = new Date(year, month, day);

  const extDay = nameDay[dateObj.getUTCDay()];
  const extMonth = nameMonth[+month];
  const extYear = year;
  return { extDay, extMonth, extYear };
};

const checkDateFormat = (date) => {
  if (!date) {
    return -2;
  }
  const reg = /([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})/g;
  const todasAsDatas = date.match(reg);

  if (todasAsDatas) {
    const today = dataTodayFormatWithBar();
    const [todayDay, todayMonth, todayYear] = today.split('/');
    const [currentDay, currentMonth, currentYear] = date.split('/');

    if (todayYear < currentYear) {
      return -1;
    }
    if (todayMonth < currentMonth) {
      return -1;
    }
    if (todayDay < currentDay) {
      return -1;
    }
    return 1;
  }
  return 0;
};

export {
  dataTodayFormatWithBar,
  dayBefore,
  compareDate,
  extentDate,
  checkDateFormat,
};
