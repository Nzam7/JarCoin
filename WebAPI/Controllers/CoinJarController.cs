using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.DI.CustomPolicies;
using WebAPI.Data;

namespace WebAPI.Controllers
{
    [CustomCorsPolicy]
    public class CoinJarController : ApiController
    {
        private ICoinRepository _repository;

        public CoinJarController(ICoinRepository repository)
        {
            _repository = repository;
        }
        public IHttpActionResult Get()
        {
            return Ok(_repository.GetTotalAmount());
        }

        public void Post(Models.Coin coin)
        {
             _repository.AddCoin(coin);
        }

        public void Delete()
        {
            _repository.Reset();
        }

    }
}
