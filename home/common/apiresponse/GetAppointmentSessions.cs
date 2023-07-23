using common.database;

namespace common.apiresponse
{
    public class GetAppointmentSessionResponse : Response
    {
        public List<AppointmentSessionEntity> Sessions { get; set; }
    }
}
