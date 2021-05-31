using server.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Model: IModel
    {
        [Key]
        public int Id { get; set; }

        public DateTime Timestamp { get; set; }
    }
}
