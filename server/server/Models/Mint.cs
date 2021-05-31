using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Mint: Model
    {
        public string Address { get; set; }

        public int AmountEth { get; set; }

        public int AmountCzt { get; set; }
    }
}
