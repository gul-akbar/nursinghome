using common;
using common.apirequests.nursinghome;

namespace NursingManagementSystem
{
	internal class ApiCalls
	{
		public static ApplicationResponse RegisterNursingHome(RegisterNursingHomeRequest request)
		{
			return ApiCentral.Call<ApplicationResponse>("RegisterNursingHome", request);
		}
	}
}
