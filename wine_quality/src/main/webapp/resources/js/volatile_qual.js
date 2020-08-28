$(document).ready(function () {
    load_volatileQual();
});


function xRange(args){
	var x = [];
	
	for(var i = 0; i<args.length; i++){
		x[i] = args[i].quality;
	}
	
	x = x.filter(function(value, index, self){ 
  		return self.indexOf(value) === index;
	});
	
	x.sort();
	
	return x;
}

function yData(args, quality){
	var y = [];
	var cnt = 0;
	
	for(var i = 0; i<args.length; i++){
		if(args[i].quality==quality){
			y[cnt++] = args[i].volatile_acidity;
		}
	}
	
	return y;
}


function load_volatileQual() {

    var url = "/wine_quality/volatileQualList";

    $.ajax({
        type: "POST",
        url: url,
        success: function (args) {
	
			var dataArray = []; var cnt = 0;
			var x0 = xRange(args);
			var y0 = [];
	
			/*$("#debug_button").click(function(){
				console.log(x0); // 변수 선언보다 먼저 와도 괜찮
				console.log(y0);
			}); */
	
			
			for(var i = 0; i<x0.length; i++){
				y0 = yData(args, x0[i]);
				var trace = {
					y:y0,
					type: 'box',
					name: x0[i]
				};
				dataArray[cnt++] = trace;
			}


			var layout = {
  				yaxis: {
    			title: 'Volatile Acitidy',
    			zeroline: false
  				},
				xaxis: {
					title: 'Quality'
				}
			};

            var data = dataArray;

            Plotly.newPlot('volatileQual_box', data, layout, {displayModeBar: false});


            console.log(args);
        },
        beforeSend: function () {
            $("#volatileQualList").empty(); // homecontroller에서 설정한 attribute명
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}

