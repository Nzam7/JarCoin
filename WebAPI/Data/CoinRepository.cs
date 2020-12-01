using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebAPI.Data
{
    public class CoinRepository : ICoinRepository
    {
    
        public void  AddCoin(ICoin coin)
        {
            var Amount = coin.Amount;
            var Volume = coin.Volume;
            try
            {
                using (var conn = new SqlConnection())
                using (var cmd = new SqlCommand())
                using (var da = new SqlDataAdapter(cmd))
                using (var ds = new DataSet())
                {
                    conn.ConnectionString = ConfigurationManager.ConnectionStrings["ApplicationServices"].ConnectionString;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "Coin_Insert";
                    cmd.Parameters.AddWithValue("@Amount", Amount);
                    cmd.Parameters.AddWithValue("@Volume", Volume);
                    cmd.Connection = conn;
                    conn.Open();
                    da.Fill(ds);
                    conn.Close();
                }
            }
            catch (SqlException ex)
            {
            }
        }

        public decimal GetTotalAmount()
        {
            Models.TotalAmount data = new Models.TotalAmount();
            try
            {   
                using (var conn = new SqlConnection())
                using (var cmd = new SqlCommand())
                using (var da = new SqlDataAdapter(cmd))
                using (var ds = new DataSet())
                {
                    conn.ConnectionString = ConfigurationManager.ConnectionStrings["ApplicationServices"].ConnectionString;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "Get_Amount";
                    cmd.Connection = conn;
                    conn.Open();
                    da.Fill(ds);
                    conn.Close();

                    DataTable AmountDATA = ds.Tables[0];
                    data.Amount = (Decimal)AmountDATA.Rows[0]["TotalAmount"];
                }
            }
            catch (SqlException ex)
            {
            }
            return data.Amount;
        }

        public void Reset()
        {
            try
            {
                using (var conn = new SqlConnection())
                using (var cmd = new SqlCommand())
                using (var da = new SqlDataAdapter(cmd))
                using (var ds = new DataSet())
                {
                    conn.ConnectionString = ConfigurationManager.ConnectionStrings["ApplicationServices"].ConnectionString;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "Rest_Jar";
                    cmd.Connection = conn;
                    conn.Open();
                    da.Fill(ds);
                    conn.Close();
                }
            }
            catch (SqlException ex)
            {
            }
        }
    }
}