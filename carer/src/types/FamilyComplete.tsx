import { IFamily } from "./IFamily";
import { IFamilyMembers } from "./IFamilyMembers";

export interface FamilyComplete {
  updateFamily: false;
  family: IFamily;
  updateFamilyMembers: boolean;
  updatePayments: boolean;
  payments: [];
  familyMembers: IFamilyMembers[];
  totalAmountDue: string;
}
