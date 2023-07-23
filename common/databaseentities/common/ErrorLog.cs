using Dapper.Contrib.Extensions;

namespace common.databaseentities.common
{
    [Table("ErrorLog")]
    public class ErrorLog
    {
        [Key]
        public int ErrorLogId { get; set; }
        public Guid Guid { get; set; }
        public DateTime DateTime { get; set; }

        public string Message { get; set; } = string.Empty;
        public string StackTrace { get; set; } = string.Empty;
        public Int16 Area { get; set; }
    }
}
