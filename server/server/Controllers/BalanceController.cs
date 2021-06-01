using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController, Route("/balance")]
    public class BalanceController : ControllerBase
    {
        private readonly IBalanceService _balanceService;

        public BalanceController(IBalanceService balanceService)
        {
            _balanceService = balanceService;
        }

        [HttpGet, Route("{address}")]
        public Balance GetByAddress(string address)
        {
            return _balanceService.GetAll().Where(b => b.Address == address).FirstOrDefault();
        }

        [HttpPost]
        public void Create([FromBody] ApiBalance balance)
        {
            var existingBalance = _balanceService.GetAll().Where(b => b.Address == balance.Address).FirstOrDefault();
            if (existingBalance == null)
            {
                var newBalance = new Balance
                {
                    Address = balance.Address,
                    AmountCzt = balance.CurrentBalance,
                    Timestamp = balance.Timestamp
                };
                _balanceService.Create(newBalance);
            }
            else
            {
                if (existingBalance.AmountCzt != balance.CurrentBalance)
                {
                    var updatedBalance = new Balance
                    {
                        Id = existingBalance.Id,
                        Address = existingBalance.Address,
                        AmountCzt = balance.CurrentBalance,
                        Timestamp = balance.Timestamp
                    };
                    _balanceService.Update(balance.Id, updatedBalance);
                }
            }
        }
    }
}
