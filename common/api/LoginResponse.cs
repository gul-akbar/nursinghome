using common.apirequests.nursinghome;

namespace common.api
{
	public class LoginResponse
	{
		public Guid SessionGuid { get; set; }
		public bool Success { get; set; }
		public UserInformation UserInformation { get; set; }
	}
}
