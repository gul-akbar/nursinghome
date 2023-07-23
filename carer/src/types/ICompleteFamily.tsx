import { IFamily } from "./IFamily";
import { IFamilyMembers } from "./IFamilyMembers";
import { IPayment } from "./IPayment";

export interface IFamilyComplete {
  updateFamily: false;
  family: IFamily;
  updateFamilyMembers: boolean;
  updatePayments: boolean;
  payments: IPayment[];
  familyMembers: IFamilyMembers[];
  totalAmountDue: string;
}
