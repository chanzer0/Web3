using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Models;
using server.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TokenController : ControllerBase
    {
        private readonly IMintService _mintService;

        public TokenController(IMintService mintService)
        {
            _mintService = mintService;
        }

        [HttpGet]
        public IEnumerable<Mint> GetAll()
        {
            return _mintService.GetAll();
        }
    }
}
