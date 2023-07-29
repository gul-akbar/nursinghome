export interface IFormatters {
  formatDate(d: Date): string;
  formatTime(d: Date): string;
  formatDateTime(d: Date): string;
  formatMonthAndYear(d: Date): string;
  formatPrice(p: number): string;
}
