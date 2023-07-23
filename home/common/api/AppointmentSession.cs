using common.api;

namespace common.database
{
    public class AppointmentSession
    {
        public string Name { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }

		public DateTime StartDateTime { get; set; }
		public DateTime EndDateTime { get; set; }
        public decimal Rate { get; set; }
        public string Notes { get; set; } = string.Empty;

        public AppointmentRecurrence Recurrence { get; set; }
	}
}