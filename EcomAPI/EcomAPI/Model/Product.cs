using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcomAPI.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal price { get; set; }
        public int category { get; set; }
        public string imageUrl { get; set; }
        public int IsDelete { get; set; }


    }
}
