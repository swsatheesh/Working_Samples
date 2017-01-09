import React from 'react';
class AppendDOMElement extends React.Component {
  pageviewerSetUp() {
    var width = 700,
            height = 400,
            padding = 100;

        // create an svg container
        var vis = d3.select("body").
            append("svg:svg")
                .attr("width", width)
                .attr("height", height);
        console.log(d3);
        // define the y scale  (vertical)
        var yScale = d3.scaleLinear().domain([0, 100]).range([height - padding, padding]);

        // define the x scale (horizontal)
        var mindate = new Date(2012,0,1),
            maxdate = new Date(2012,0,31);

        var xScale = d3.scaleTime().domain([mindate, maxdate]).range([padding, width - padding * 2]);

        // define the y axis
        var yAxis = d3.axisLeft(yScale);

        // define the y axis
        var xAxis = d3.axisBottom(xScale);

        // draw y axis with labels and move in from the size by the amount of padding
        vis.append("g")
            .attr("transform", "translate("+padding+",0)")
            .call(yAxis);

        // draw x axis with labels and move to the bottom of the chart area
        vis.append("g")
            .attr("class", "xaxis")   // give it a class so it can be used to select only xaxis labels  below
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(xAxis);

        // now rotate text on x axis
        // solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY
        // first move the text left so no longer centered on the tick
        // then rotate up to get 45 degrees.
       vis.selectAll(".xaxis text")  // select all the text elements for the xaxis
          .attr("transform", function(d) {
              return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
        });
  }
}

export default AppendDOMElement;
