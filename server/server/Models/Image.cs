using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Image : Model
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public int CollectionId { get; set; }
    }

}
