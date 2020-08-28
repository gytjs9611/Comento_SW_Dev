$(document).ready(function () {
    load_quality();
});


function xRange(args){
	var x = [];
	
	for(var i = 0; i<args.length; i++){
		x[i] = args[i].quality;
	}
	
	return x;
}

function getCount(args){
	var count = [];
	
	for(var i = 0; i<args.length; i++){
		count[i] = args[i].count;
	}
	
	return count;
}

function checkOrder(args){ // args의 count값이 몇등인지 알려줌
	var result = [];
	for(var i = 0 ;i<args.length; i++){
		cnt = 0;
		for(var j = 0; j<args.length; j++){
			if(i!=j && args[i].count<args[j].count){
				cnt++;
			}
		}
		result[i] = cnt;
	}
	
	return result;
}

function sortColors(args, colors){ // 등수에 따라 차례로 첫번쨰 색부터 할당
	var order = checkOrder(args);
	var result = [];
	
	for(var i =0 ; i<order.length; i++){
		result[i] = colors[order[i]];
	}
	
	return result;
}

function load_quality() {

    /*$("#load_wineList").click(function(){  // button click event*/

    var url = "/wine_quality/qualityList";

    $.ajax({
        type: "POST",
        url: url, 
        success: function (args) {
	
			
			/*$("#debug_button").click(function(){
				for(var i = 0; i<args.length; i++){
					console.log(data[i].quality +" "+data[i].count);
				}
			});*/
	
			var quality = xRange(args);
			var count = getCount(args);
			var color1 = ['rgb(247, 132, 123)',
									'rgb(247, 170, 123)',
									'rgb(247, 212, 123)',
									'rgb(179, 229, 150)',
									'rgb(150, 218, 229)',
									'rgb(150, 172, 229)',
									'rgb(212, 180, 247)'];
			
			var ultimateColors = sortColors(args, color1);		

            var data = [
				{
  					values: count,
  					labels: quality,
					hole: .4,
  					type: 'pie',
					marker: {
    					colors: ultimateColors
 					 },
					textfont:{
						size:15
					}
				}
			];
			

			var layout = {
				annotations:[
					{
						font:{
							size:25
						},
						showarrow: false,
						text: 'Quality'
					}
				],
				width:500,
				height:500,
				legend:{
					font:{
						size:20
					}
				},
				margin: {
   					l: 60,
    				r: 10,
    				b: 0,
   					t: 10,
   					pad: 4
  				}
			};

			Plotly.newPlot('quality_pie', data, layout, {displayModeBar: false});
			
			/*var update = {
    			marker:{
					colors: ultimateColors
				}
			};
			Plotly.restyle('quality_pie', update, 0);*/

        },
        beforeSend: function () {
            $("#qualityList").empty(); // homecontroller에서 설정한 attribute명
        },
        error: function (e) {
            alert(e.responseText);
        }
    });

    /* });*/
}

function load_stdev() {
    var movieList;
    var html;
    $("#load_wineList").click(function () {

        var url = "/wine_quality/stdList";
        //var params="param1="+param1+"¶m2="+param1;  

        $.ajax({
            type: "POST",
            url: url,
            //data:params,      
            success: function (args) {



                console.log(args);
            },
            beforeSend: function () {
                $("#stdList").empty();
            },
            error: function (e) {
                alert(e.responseText);
            }
        });

    });
}

function load_alcQual() {
    var movieList;
    var html;
    $("#load_wineList").click(function () {

        var url = "/wine_quality/alcQualList";
        //var params="param1="+param1+"¶m2="+param1;  

        $.ajax({
            type: "POST",
            url: url,
            //data:params,      
            success: function (args) {

                console.log(args);
            },
            beforeSend: function () {
                $("#alcQualList").empty();
            },
            error: function (e) {
                alert(e.responseText);
            }
        });

    });
}

function load_volatileQual() {
    var movieList;
    var html;
    $("#load_wineList").click(function () {

        var url = "/wine_quality/volatileQualList";
        //var params="param1="+param1+"¶m2="+param1;  

        $.ajax({
            type: "POST",
            url: url,
            //data:params,      
            success: function (args) {

                console.log(args);
            },
            beforeSend: function () {
                $("#volatileQualList").empty();
            },
            error: function (e) {
                alert(e.responseText);
            }
        });

    });
}