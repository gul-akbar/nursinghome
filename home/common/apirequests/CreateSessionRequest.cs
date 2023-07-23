using common.api;

namespace common.apirequests
{
	public class CreateSessionRequest : Request
	{
		public AppointmentSession Session { get; set; }
	}
}
