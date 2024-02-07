using Microsoft.AspNetCore.Mvc;

namespace Mission5_2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult quote()
        {
            return View();
        }
    }
}
