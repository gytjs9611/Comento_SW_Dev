<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Visualize Wine Quality</title>
    <%@include file="./common_resource.jsp"%>
    
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />

 
</head>
<body>
    <br><br>
    <h1 class="title">Visualize Wine Quality Data</h1>
    <br><br>
    <!-- <div id = "button_panel">
        <button id = "debug_button" type = "button">디버깅</button>
    </div> -->
    
    <script src="http://d3js.org/d3.v3.min.js"></script>
	<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/quality.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/avg.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/alc_qual.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/volatile_qual.js"></script>
    



    <h3 style="margin-top:50;margin-bottom:50">a. 각 평가 항목별 평균값</h3>
    <div id = "avg_table1" style="width:1200;margin:auto;"></div>
    <div id = "avg_table2" style="width:1200;margin:auto"></div>
    
    <h3 style="margin-top:100">b. Wine Quality의 분포</h3>
    <div id = "quality_pie" style="width:500;margin:auto"></div>

   
    <h3 style="margin-top:170; margin-bottom:50">c. Alcohol-Quality의 상관관계</h3>
    <div id = "alcQual_scatter"></div>

    <h3 style="margin-top:170;  margin-bottom:0">d. Volatile Acidity-Quality의 상관관계</h3>
    <div id = "volatileQual_box" style="width:1000;margin:auto; margin-bottom:100"></div>
    
    
    
    
    
 
</body>
</html>
