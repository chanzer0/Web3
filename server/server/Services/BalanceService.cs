using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.Interfaces
{
    public class BalanceService : Service<Balance>, IBalanceService
    {
        public BalanceService(Context dbContext) : base(dbContext) { }
    }
}
