<%@ page import="edu.ucla.cs.cs144.SearchResult"%>
<!DOCTYPE html>
<html>
<head>
  <title>Ebay Keyword Search</title>
  <meta charset="utf-8">
</head>
<body>
  <div>
    <h2>Keyword Search Result</h2>
    <table>
      <%
        SearchResult[] srArr = (SearchResult[])request.getAttribute("resultArray");
        for (int i=0; i<srArr.length;i++){
        SearchResult result = srArr[i];
      %>
      <tr>
        <td><a href="item?itemID=<%= result.getItemId() %>"><%= result.getItemId() %>   <%= result.getName() %></td>
        <td></td>
      </tr>
      <%
      }
      %>
    </table>

  </div>
</body>
</html>