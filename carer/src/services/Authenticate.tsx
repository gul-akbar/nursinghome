import { AxiosResponse } from "axios";
import { IUser } from "../types/IUser";
import { API } from "./Service";

export const authenticate = (
  id: string,
  password: string
): Promise<IUser | void> => {
  const login = {
    username: id,
    password: password,
  };

  return API.post("login", login)
    .then((response: AxiosResponse<IUser>) => {
      return response.data;
    })
    .catch(function (error: any) {
      console.log("error from login api :  " + error);
      return;
    });
};
