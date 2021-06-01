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

        public double AmountEth { get; set; }

        public double AmountCzt { get; set; }
    }
}
