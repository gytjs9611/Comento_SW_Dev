$(document).ready(function () {
    load_alcQual();
});


function load_alcQual() {


    var url = "/wine_quality/alcQualList";

    $.ajax({
        type: "POST",
        url: url, 
        success: function (args) {
	
	// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    /*width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;*/
	width=400, height=400;

// append the svg object to the body of the page
var svg = d3.select("#alcQual_scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json(url, function(data) {

  // Add X axis
  var x = d3.scale.linear()
    .domain([0, 10])
    .range([ 0, width ]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.svg.axis().scale(x).orient("bottom").ticks(10))
	.append("text")
   	.attr("dx", 370)
    .attr("dy", -10)
    .style("text-anchor", "end")
    .text("Quality");

  // Add Y axis
  var y = d3.scale.linear()
    .domain([5, 18])
    .range([ height, 0]);

 	svg.append("g")
    .call(d3.svg.axis().scale(y).orient("left").ticks(10))
	.append("text")
	.attr("transform", "rotate(-90)")
   	.attr("y", 5)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Alcohol");

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.quality); } )
      .attr("cy", function (d) { return y(d.alcohol); } )
      .attr("r", 5)
      .style("fill", "#E24B4B")

})
	
        },
        beforeSend: function () {
            $("#alcQualList").empty(); // homecontroller에서 설정한 attribute명
        },
        error: function (e) {
            alert(e.responseText);
        }
    });
}

