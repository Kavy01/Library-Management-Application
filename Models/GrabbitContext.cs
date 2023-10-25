using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace API.Models
{
    public class GrabbitContext : DbContext
    {
        public GrabbitContext(DbContextOptions<GrabbitContext> options)
           : base(options)
        {
        }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<BookCategory> BookCategories { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
    }
}
