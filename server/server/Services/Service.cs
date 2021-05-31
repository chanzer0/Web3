using Microsoft.EntityFrameworkCore;
using server.Models;
using server.Models.Interfaces;
using server.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class Service<T> : IService<T> where T: class, IModel
    {
        private readonly Context _dbContext;

        public Service(Context dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Create(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var entity = await GetById(id);
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public IQueryable<T> GetAll()
        {
            return _dbContext.Set<T>().AsNoTracking();
        }

        public async Task<T> GetById(int id)
        {
            return await _dbContext.Set<T>().AsNoTracking()
                                            .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task Update(int id, T entity)
        {
            _dbContext.Set<T>().Update(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
