namespace common.databaseentities
{
	public class BaseEntity
	{
		public Guid Guid { get; set; }
		public DateTime LastUpdateDateTime { get; set; }
		public DateTime CreatedDateTime { get; set; }
	}
}
