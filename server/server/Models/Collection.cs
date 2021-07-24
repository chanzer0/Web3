using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public enum CollectionType
    {
        Nature = 1,
        Street = 2
    }

    public class Collection : Model
    {
        public CollectionType CollectionId { get; set; }
        public string CollectionName { get; set; }
        public string HeaderImageUrl { get; set; }
    }
}
