import { IUser } from "../../types/IUser";

export interface IAuthenticatedUser {
  setUser: (u: IUser) => void;
  getUser(): IUser;
}
