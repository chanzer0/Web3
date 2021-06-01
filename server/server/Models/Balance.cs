using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Balance : Model
    {
        public string Address { get; set; }
        public double AmountCzt { get; set; }
    }

    public class ApiBalance : Balance
    {
        public double CurrentBalance { get; set; }
    }
}
