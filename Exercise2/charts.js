function createLinesChart(categories, series){
    Highcharts.chart('container-lines', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Values by Categories and Days'
        },
        subtitle: {
            text: 'Juin categories'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: series
    });
}

function createPieChart(dataByCat) {
    Highcharts.chart('container-pie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Categories comparative'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: dataByCat
        }]
    });
}