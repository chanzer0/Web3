using server.Models;
using server.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class MintService : Service<Mint>, IMintService
    {
        public MintService(Context dbContext) : base(dbContext) {  }
    }
}
