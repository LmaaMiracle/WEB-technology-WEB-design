using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace lab2
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string[] rKeys = Request.ServerVariables.AllKeys;
            StringBuilder output = new StringBuilder();

            foreach(string key in rKeys)
            {
                output.Append(key + " = " + Request.ServerVariables[key] + "</br>");
            }

            Response.Write(output);
        }
    }
}