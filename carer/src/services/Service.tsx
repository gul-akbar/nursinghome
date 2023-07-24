import axios, { AxiosResponse } from "axios";
import { IMemberResponse } from "../types/IMemberResponse";
import { IMember } from "../types/IMember";
import { IFamilyInformation } from "../types/IFamilyInformation";
import { ISession } from "../types/ISession";
import { IAppointmentSession } from "../types/IAppointmentSessions";

export const API = axios.create({
  baseURL: "https://nursinghomeapi.ga-system.co.uk/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  // headers: { token: "1234567890" },
  validateStatus: () => true,
});

// export const newMember = (member: IMember): Promise<IMemberResponse | void> => {
//   const request = {
//     SystemOrganisationGuid: "0ECEDE14-DAEC-4610-AA3A-BCDCDD19CDA5",
//     family: {
//       Name: member.Name,
//       HouseNumber: member.HouseNumber,
//       addressLine: member.AddressLine,
//       postcode: member.Postcode,
//       mobile: member.Mobile,
//       emailAddress: member.EmailAddress,
//       password: member.Password,
//     },
//   };

//   return API.post("registerfamily", request)
//     .then((response: AxiosResponse<IMemberResponse>) => {
//       return response.data;
//     })
//     .catch(function (error: any) {
//       console.log("error from new member api :  " + error);
//       return;
//     });
// };

// export const getfamilyinformation = (
//   sessionId: string,
//   familyId: string
// ): Promise<IFamilyInformation | void> => {
//   const request = {
//     sessionGuid: sessionId,
//     familyGuid: familyId,
//   };

//   return API.post("getfamilyinformation", request)
//     .then((response: AxiosResponse<IFamilyInformation>) => {
//       return response.data;
//     })
//     .catch(function (error: any) {
//       console.log("error from getfamilyinformation api :  " + error);
//       return;
//     });
// };

export const newSession = (session: ISession): Promise<boolean | void> => {
  const request = {
    session: session,
  };

  return API.post("AppointmentSessionCreation", request)
    .then((response: AxiosResponse<boolean>) => {
      return response.data;
    })
    .catch(function (error: any) {
      console.log("error from new member api :  " + error);
      return;
    });
};

export const getAppointmentSessions = (
  dt: Date
): Promise<IAppointmentSession | void> => {
  const request = {
    nursingHomeGuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    date: dt,
  };

  return API.post("GetAppointmentSessions", request)
    .then((response: AxiosResponse<IAppointmentSession>) => {
      return response.data;
    })
    .catch(function (error: any) {
      console.log("error from new member api :  " + error);
      return;
    });
};
