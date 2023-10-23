using Microsoft.AspNetCore.Mvc;

namespace PLMVC.Controllers
{
    public class UserDataController : Controller
    {
        public IActionResult GetAll()
        {
            return View();
        }
    }
}
