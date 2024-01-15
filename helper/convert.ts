export const numberToRupiah = (number:number) => {
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
}

export const dateToString = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US',options).format(date)
}
