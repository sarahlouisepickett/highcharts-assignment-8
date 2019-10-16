
Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Limes','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Sarah and Rachel\'s house'
      }
    },
    series: [{
      name: 'Sarah',
      data: [6, 1, 0, 4]
    }, {
      name: 'Rachel',
      data: [6, 5, 7, 3]
    }]
  });
