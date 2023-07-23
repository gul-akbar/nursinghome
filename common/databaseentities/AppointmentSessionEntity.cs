using common.api;
using common.databaseentities;
using Dapper.Contrib.Extensions;

namespace common.database
{
    [Table("AppointmentSession")]
    public class AppointmentSessionEntity : BaseEntity
	{
        [Key]
        public int AppointmentSessionId { get; set; }

		public int NursingHomeId { get; set; }

		public Guid GroupIdentifier { get; set; }

        public string Name { get; set; } = string.Empty;
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public decimal Rate { get; set; }
        public string Notes { get; set; } = string.Empty;

        public AppointmentStatus Status { get; set; }
	}
}