using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ApiJazzTool.Models;

namespace ApiJazzTool.Controllers
{
    public class JazzToolController : ApiController
    {
        JazzTool _db = new JazzTool();

        [HttpGet]
        public List<PropsModel> GetTeamStats(string PropTypeValue, string SportValue)
        {
            return _db.GetProps(PropTypeValue, SportValue);
        }

    }
}
