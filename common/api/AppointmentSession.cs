namespace common.api
{
    public class AppointmentSession : Request
    {
        public string Name { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }

		public DateTime StartTime { get; set; }
		public DateTime EndTime { get; set; }
        public decimal Rate { get; set; }
        public string Notes { get; set; } = string.Empty;

        public bool IncludeRecurrence { get; set; }
        public AppointmentRecurrence Recurrence { get; set; }
	}
}