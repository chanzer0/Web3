using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Interfaces
{
    public interface IModel
    {
        [Key]
        public int Id { get; set; }

        public DateTime Timestamp { get; set; }
    }
}
