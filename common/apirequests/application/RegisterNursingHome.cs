using common.databaseentities;

namespace common.apirequests.nursinghome
{
	public class RegisterNursingHomeRequest : Request
	{
		public NursingHomeEntity NursingHome { get; set; }
	}
}
