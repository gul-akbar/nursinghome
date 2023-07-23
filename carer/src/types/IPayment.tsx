export interface IPayment {
  paymentId: number;
  guid: string;
  familyId: number;
  paymentStatus: 1;
  datePayment: Date;
  amountPaid: number;
  year: number;
}
