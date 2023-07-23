namespace common.api
{
	public class AppointmentRecurrence
	{
		public List<Day> Days { get; set; } 
		public int RecurEveryWeek { get; set; }
		public DateTime EndDate { get; set; }
	}


	public enum Day : int
	{
		Monday = 1,
		Tuesday = 2,
		Wednesday = 3,
		Thursday = 4,
		Friday = 5,
		Saturday = 6,
		Sunday = 7
	}
}
