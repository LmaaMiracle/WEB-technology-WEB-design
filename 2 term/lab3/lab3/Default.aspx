<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="lab3._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <br />

    <asp:Label ID="PageTitle" runat="server" Text="Агенство по недвижимости"></asp:Label>
    <br />
    <br />

    <asp:GridView ID="Worker" runat="server">
    </asp:GridView>
    <br />

    <asp:GridView ID="TheProperty" runat="server">
    </asp:GridView>
</asp:Content>
