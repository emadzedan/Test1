<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>إنجاز</title>    
	<meta name="apple-mobile-web-app-capable" content="yes">
    <!-- Standard iPhone --> 
    <link rel="apple-touch-icon" sizes="57x57" href="./Images/touch-icon-iphone-57.png" />
    <!-- Retina iPhone --> 
    <link rel="apple-touch-icon" sizes="114x114" href="./Images/touch-icon-iphone-114.png" />
    <!-- Standard iPad --> 
    <link rel="apple-touch-icon" sizes="72x72" href="./Images/touch-icon-ipad-72.png" />
    <!-- Retina iPad --> 
    <link rel="apple-touch-icon" sizes="144x144" href="./Images/touch-icon-ipad-144.png" />
    <link rel="apple-touch-startup-image" href="./Images/startup.png">
	<style>
            body {
                margin: 0px;
                padding: 0px;
            }
            #Content{
                width:800px;
                height:475px;
                border: 1px solid #333;
                background-color:#FFF;
            }
			#VideoContent{
				position:absolute;
				z-index:2;
			}
			#vCon{
				width:750px;
                height:425px;
				background-color:#000;
				padding:25px;
			}
			#Video{
				border: 1px solid #333;	
			}
			.close{
				color:#FFF;
				float:right;
				margin-right:5px;
				cursor:pointer;
				font-family:Verdana, Geneva, sans-serif;
				padding-bottom:5px;
			}
        </style>
        <script src="./Javascript/jquery-1.6.3.min.js"></script>
        <script src="./Javascript/Functions.js"></script>
           
</head>

<body onmousedown="return false;">
	<? echo "Emad Zedan PHP Test";?>
    <div id="Content"><iframe width="800px" height="475px" src="Module1Part4.html" scrolling="no" frameborder="0" id="iFrameContent"/></div>
    <div id="VideoContent"></div>
</body>
</html>
