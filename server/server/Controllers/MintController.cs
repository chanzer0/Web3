using Microsoft.AspNetCore.Authorization;
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
    [ApiController, Route("/mint")]
    public class MintController : ControllerBase
    {
        private readonly IMintService _mintService;
        private readonly IBalanceService _balanceService;

        public MintController(IMintService mintService, IBalanceService balanceService)
        {
            _mintService = mintService;
            _balanceService = balanceService;
        }

        [HttpGet]
        public IEnumerable<Mint> GetAll()
        {
            return _mintService.GetAll();
        }

        [HttpPost]
        public void Create([FromBody] Mint mint)
        {
            _mintService.Create(mint);
        }
    }
}
