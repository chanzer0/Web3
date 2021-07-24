using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.Interfaces
{
    public class CollectionService : Service<Collection>, ICollectionService
    {
        public CollectionService(Context dbContext) : base(dbContext) { }
    }
}
