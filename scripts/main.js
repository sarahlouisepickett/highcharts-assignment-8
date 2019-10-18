Highcharts.chart('container', {

    title: {
        text: 'U.S Aid Spending, 2010 - 2017'
    },

    subtitle: {
        text: 'Source: explorer.usaid.gov'
    },

    yAxis: {
        title: {
            text: 'Spending in Billions'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Total Obligations',
        data: [49, 50, 46, 43, 49, 50, 59, 49]
    }, ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container2', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Sector Foreign Aid Spending (2017)'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} billion'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 20,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 20
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Conflict, Peace & Security',
        data: [{
            name: 'Conflict, Peace & Security',
            value: 15
        },
      ]
    }, {
        name: 'Emergency Response',
        data: [{
            name: "Emergency Response",
            value: 8.3
        },
     ]
    },{
        name: 'HIV/Aids',
        data: [{
            name: "HIV/Aids",
            value: 6.1
        },
      ]
    }, {
        name: 'Agriculture',
        data: [{
            name: "Agriculture",
            value: 1.2
        },
      ]
    },{
        name: 'Basic Health',
        data: [{
            name: "Basic Health",
            value: 1.6
        },
      ]
    }, {
        name: 'Government and Civil Society',
        data: [{
            name: "Government and Civil Society",
            value: 7.6
        },

      ]
    },{
        name: 'General Environmental Protection',
        data: [{
            name: "General Environmental Protection",
            value: 7.6
        },

      ]
    }, {
        name: 'Basic Educationn',
        data: [{
            name: "Basic Education",
            value: 1.2
        },
      ]
    },
    {
        name: 'Other',
        data: [{
            name: "Other",
            value: 6.5
        },
      ]
    },
    {
        name: 'Operating Expenses',
        data: [{
            name: "Operating Expenses",
            value: 7.2
        },
    ]
    }]
});
