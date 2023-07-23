using Microsoft.AspNetCore.Mvc;

namespace nursinghomeapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class HeartbeatController : Controller
	{

		[HttpPost(Name = "Heartbeat")]
		public string Post()
		{
			return "Hello : " + DateTime.Now;
		}
	}
}