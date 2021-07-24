using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.Interfaces
{
    public class ImageService : Service<Image>, IImageService
    {
        public ImageService(Context dbContext) : base(dbContext) { }
    }
}
