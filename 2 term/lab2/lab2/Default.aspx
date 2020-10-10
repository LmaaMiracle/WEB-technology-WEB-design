<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <form id="form1"> 
        <br>
        <input type="text" name="second_name" value="" placeholder="Фамилия"/> <br>
        <input type="text" name="name" value="" placeholder="Имя" /><br>
        <input type="text" name="patronomic" value="" placeholder="Отчество"/> <br>
        <input type="text" name="name" value="" placeholder="День рождения (дд/мм/гг)"/> <br>
        <select>
            <option value="male">М</option>
            <option value="female">Ж</option>
        </select> <br>
        <input type="text" name="soc_security_number" value="" placeholder="Номер соц. страхования"/> <br>
        <input type="text" name="name" value="" placeholder="Должность"/> <br> 
        <asp:TextBox ID="phone_number" placeholder="Телефон" runat="server" Width="123px"> </asp:TextBox>
        <br>

        <asp:RegularExpressionValidator 
        ID="RegularExpressionValidator1"
        runat="server" 
        ControlToValidate="phone_number"
        ErrorMessage="Неправильное число" 
        ValidationExpression="[0-9]{10}" >
        </asp:RegularExpressionValidator>

        <asp:Button type="Submit" runat="server" Text="Отправить" />

    </form>
</asp:Content>
