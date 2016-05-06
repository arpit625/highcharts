function mapsChart(id) {


        // Instanciate the map
        $(id).highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : 'US population density (/km²)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : [
                    {
                        "value": 438,
                        "code": "NJ"
                    },
                    {
                        "value": 387.35,
                        "code": "RI"
                    },
                    {
                        "value": 30.75,
                        "code": "TX"
                    }],
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
};

function scatterchart(id, allData, scatterData) {
    $(id).highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Height Versus Weight of 507 Individuals by Gender'
        },
        subtitle: {
            text: 'Source: Heinz  2003'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Height (cm)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Weight (kg)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [ 
        scatterData[0].Consumer,
        scatterData[0].Corporate,
        scatterData[0]['Home Office']
        // scatterData.Corporate
      
        ]
    });

}

function piechart(id, allData, pieData) {

   $(id).highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Category market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data : pieData
    }]
});
}

function columnchart(id, allData, columnData, title, subtitle) {
    $(id).highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            categories: columnData.xAxis,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sales (in $)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: columnData.name,
         data: columnData.data
        }]
    });
}

function barchart(id) {
 $(id).highcharts({
     chart: {
         type: 'bar'
     },
     title: {
         text: 'Historic World Population by Region'
     },
     subtitle: {
         text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
     },
     xAxis: {
         categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
         title: {
             text: null
         }
     },
     yAxis: {
         min: 0,
         title: {
             text: 'Population (millions)',
             align: 'high'
         },
         labels: {
             overflow: 'justify'
         }
     },
     tooltip: {
         valueSuffix: ' millions'
     },
     plotOptions: {
         bar: {
             dataLabels: {
                 enabled: true
             }
         }
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'top',
         x: -40,
         y: 80,
         floating: true,
         borderWidth: 1,
         backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
         shadow: true
     },
     credits: {
         enabled: false
     },
     series: [{
         name: 'Year 1800',
         data: [107, 31, 635, 203, 2]
     }]
 });
}

