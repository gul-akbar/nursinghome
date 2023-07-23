using common.database;

namespace common.apiresponse.nursinghome
{
    public class GetAppointmentSessionResponse : Response
    {
        public List<AppointmentSessionEntity> Sessions { get; set; }
    }
}
