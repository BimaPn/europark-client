export const numberToRupiah = (number:number) => {
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

export const dateToString = (date: Date|string) => {
  const time = typeof date === "string" ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US',options).format(time)
}
