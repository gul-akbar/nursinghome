using common.api;

namespace common.apirequests.nursinghome
{
    public class CreateSessionRequest : Request
    {
        public AppointmentSession Session { get; set; }
    }
}
