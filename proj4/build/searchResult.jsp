<%@ page import="edu.ucla.cs.cs144.searchResult"%>
<!DOCTYPE html>
<html>
<head>
  <title>Ebay Keyword Search</title>
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
        <td><%=result.getItemId() %></td>
        <td><%=result.getName() %></td>
      </tr>
      <%
      ｝
      %>
    </table>
  </div>
</body>
</html>