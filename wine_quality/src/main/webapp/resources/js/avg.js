$(document).ready(function () {
    load_avg();
});


function getKeys1(){
	var keys = [ ['fixed acidity'],['volatile acidity'],
	 			['citric acid'],['residual sugar'],
				['chlorides'], ['free sulfur dioxide']];
			
	return keys;
}

function getValues1(args){
	var data = args[0];
	var result;
	
	result = [data.fixed_acidity,data.volatile_acidity, 
				data.citric_acid, data.residual_sugar,
 				data.chlorides, data.free_sulfur_dioxide];
	
	return result;
}

function getKeys2(){
	var keys = [['total sulfur dioxide'], ['density'], 
				['ph'], ['sulphates'],
 				['alcohol'], ['quality'] ];
			
	return keys;
}

function getValues2(args){
	var data = args[0];
	var result;
	
	result = [	data.total_sulfur_dioxide,data.density, 
				data.ph, data.sulphates, 
				data.alcohol, data.quality];
	
	return result;
}


function load_avg() {


    var url = "/wine_quality/avgList";

    $.ajax({
        type: "POST",
        url: url, 
        success: function (args) {
	
			var keys1 = getKeys1();
			var values1 = getValues1(args);
			
			var keys2 = getKeys2();
			var values2 = getValues2(args);

			var data = [
				{
  					type: 'table',
 			 		header: {
  			 		 	values: keys1,
  					 	align: "center",
  					 	line: {width: 1, color: 'black'},
  					  	fill: {color: "#AD5545"},
  					  	font: {family: "Arial", size: 20, color: "white"},
						height:30
 			 		},
  					cells: {
  			 			values: values1,
  			 			align: "center",
   			 			line: {color: "black", width: 1},
   			 			font: {family: "Arial", size: 18, color: ["black"]},
						height:30
  					}
				}
				
			];
			
			var data2 = [
				{
  					type: 'table',
 			 		header: {
  			 		 	values: keys2,
  					 	align: "center",
  					 	line: {width: 1, color: 'black'},
  					  	fill: {color: "#AD5545"},
  					  	font: {family: "Arial", size: 20, color: "white"},
						height:30
 			 		},
  					cells: {
  			 			values: values2,
  			 		 	align: "center",
   			 			line: {color: "black", width: 1},
   			 			font: {family: "Arial", size: 18, color: ["black"]},
						height:30
  					}
				}
				
			];
			
			
			var layout = {
   				height : 100,
   				width : 1200,
   				tracetoggle: false,
				margin: {
   					l: 60,
    				r: 10,
    				b: 0,
   					t: 0,
   					pad: 4
  				}
			};
			
			/*var layout = {
				height:300
			};*/

			Plotly.newPlot('avg_table1', data, layout, {displayModeBar: false});
			Plotly.newPlot('avg_table2', data2, layout, {displayModeBar: false});

            console.log(args);
        },
        beforeSend: function () {
            $("#avgList").empty(); // homecontroller에서 설정한 attribute명
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}

