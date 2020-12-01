using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI.Data
{
    public interface ICoin
    {
        Decimal Amount { get; set; }
        float Volume { get; set; }
    }

    public interface ICoinRepository
    {
        void AddCoin(ICoin coin);
        decimal GetTotalAmount();
        void Reset();
    }
}
