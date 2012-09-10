document.getElementById('msl').contentWindow.onload = function () {
  
var iframe = document.getElementById('msl');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var d3script = innerDoc.createElementNS("http://www.w3.org/2000/svg", "script");
d3script.setAttributeNS("http://www.w3.org/1999/xlink", "href", "js/vendor/d3.v2.js");
innerDoc.documentElement.appendChild(d3script);

var nv3script = innerDoc.createElementNS("http://www.w3.org/2000/svg", "script");
nv3script.setAttributeNS("http://www.w3.org/1999/xlink", "href", "js/vendor/nv.d3.js");
innerDoc.documentElement.appendChild(nv3script);

nv3script.onload = function () {

iframe.contentWindow.nv.addGraph(function() {
  var chart = iframe.contentWindow.nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true);


    iframe.contentWindow.d3.select("#pie")
        .datum(exampleData())
      .transition().duration(1200)
        .call(chart);

  return chart;
});

}

};

function exampleData() {
  return [
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "CDS / Options" ,
        "value" : 29.765957771107
      } , 
      { 
        "label" : "Cash" , 
        "value" : 0
      } , 
      { 
        "label" : "Corporate Bonds" , 
        "value" : 32.807804682612
      } , 
      { 
        "label" : "Equity" , 
        "value" : 196.45946739256
      } , 
      { 
        "label" : "Index Futures" ,
        "value" : 0.19434030906893
      } , 
      { 
        "label" : "Options" , 
        "value" : 98.079782601442
      } , 
      { 
        "label" : "Preferred" , 
        "value" : 13.925743130903
      } , 
      { 
        "label" : "Not Available" , 
        "value" : 5.1387322875705
      }
    ]
  }
  ];
}


