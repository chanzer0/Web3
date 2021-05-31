using server.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services.Interfaces
{
    public interface IService<T> where T: class, IModel
    {
        IQueryable<T> GetAll();

        Task<T> GetById(int id);

        Task Create(T entity);

        Task Update(int id, T entity);

        Task Delete(int id);
    }
}
