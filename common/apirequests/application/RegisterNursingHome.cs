using common.databaseentities;

namespace common.apirequests.nursinghome
{
	public class RegisterNursingHomeRequest : ApplicationRequest
	{
		public NursingHomeEntity NursingHome { get; set; }
	}
}
