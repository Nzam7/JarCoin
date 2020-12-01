using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPI.Data;

namespace WebAPI.Models
{
    public class Coin : ICoin
    {
        public decimal Amount { get; set; }
        public float Volume { get; set; }
    }
}