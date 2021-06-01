using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Balance : Model
    {
        public string Address { get; set; }
        public long AmountCzt { get; set; }
    }

    public class ApiBalance : Balance
    {
        public long CurrentBalance { get; set; }
    }
}
