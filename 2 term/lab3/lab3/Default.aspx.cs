using System;
using System.Collections.Generic;
using System.Data;
using System.Xml.Linq;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace lab3
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataSet workersDataSet = new DataSet();
            workersDataSet.ReadXml(MapPath("~/App_Data/Workers.xml"));
            Worker.DataSource = workersDataSet;
            Worker.DataBind();


            DataSet thePropertyDataSet = new DataSet();
            thePropertyDataSet.ReadXml(MapPath("~/App_Data/TheProperty.xml"));
            TheProperty.DataSource = thePropertyDataSet;
            TheProperty.DataBind();

        }
    }
}