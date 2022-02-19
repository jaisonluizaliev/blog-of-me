export const convertDate = (date) => {
  //all day of week and weekend
  const isItDayOfWeek = date.substr(0, 3);
  const postedDay = date.substr(8, 2);
  const month = date.substr(4, 3);
  const year = date.substr(11, 4);
  const hour = date.substr(16, 2);
  const minutes = date.substr(19, 2);

  //it's return this format `whatsDayOfWeekIs, 13(it's the day which has been created ) de julho de 2012 13:32" `
  return `${whatsAWeekDay(
    isItDayOfWeek
  )}, ${postedDay} de ${whatsAMonthName(
    month
  )} de ${year} às ${hour}h${minutes}`;
};

function whatsAWeekDay(isItDayOfWeek) {
  switch (isItDayOfWeek) {
    case 'Mon':
      return `Segunda - Feira`;
    case 'Tue':
      return `Terça - Feira`;
    case 'Wed':
      return `Quarta - Feira`;
    case 'Thu':
      return `Quinta - Feira`;
    case 'Fri':
      return `Sexta - Feira`;
    case 'Sat':
      return `Sábado`;
    case 'Sun':
      return `Domingo`;
    default:
      return ``;
  }
}

function whatsAMonthName(month) {
  switch (month) {
    case 'Jan':
      return `Janeiro`;
    case 'Feb':
      return `Fevereiro`;
    case 'Mar':
      return `Março`;
    case 'Apr':
      return `Abril`;
    case 'May':
      return `Maio`;
    case 'Jun':
      return `Junho`;
    case 'Jul':
      return `Julho`;
    case 'Aug':
      return `Agosto`;
    case 'Sep':
      return `Setembro`;
    case 'Oct':
      return `Outubro`;
    case 'Nov':
      return `Novembro`;
    case 'Dec':
      return `Dezembro`;

    default:
      return '';
  }
}
