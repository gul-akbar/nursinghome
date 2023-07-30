import { IFormatters } from "./IFormatters";

export function zeroPad(num: number, places: number) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

export class Formatters implements IFormatters {
  formatPrice(p: number): string {
    return p.toString();
  }
  formatMonthAndYear(d: Date): string {
    const dt = new Date(d);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const value = monthNames[d.getMonth()] + " " + dt.getFullYear();
    return value;
  }
  formatDate(d: Date): string {
    const dt = new Date(d);
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const day = dt.getDate();

    const value = dt.toDateString();
    return value;
  }
  formatTime(d: Date): string {
    const date = new Date(d);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const newMin = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + newMin + " " + ampm;
    return strTime;
  }
  formatDateTime(d: Date): string {
    return d.toString();
  }
}
